import $ from 'jquery';
import { Vector2 } from 'three';
import { WallTypes } from '../core/constants.js';
import { Utils } from '../core/utils.js';
import { EVENT_UPDATED } from '../core/events.js';

import { Dimensioning } from '../core/dimensioning.js';
import {
  Configuration,
  gridSpacing,
  configWallThickness,
  wallInformation,
} from '../core/configuration.js';
import { CarbonSheet } from './carbonsheet.js';

/* */
export const floorplannerModes = { MOVE: 0, DRAW: 1, DELETE: 2 };

// grid parameters
// export const gridSpacing = Dimensioning.cmToPixel(25); //20; // pixels
export const gridWidth = 1;
export const gridColor = '#f1f1f1';

// room config
// export const roomColor = '#f9f9f9';
export const roomColor = '#fedaff66';
export const roomColorHover = '#008cba66';
export const roomColorSelected = '#00ba8c66';

// wall config
export let wallWidth = 5;
export let wallWidthHover = 7;
export let wallWidthSelected = 9;
export const wallColor = '#dddddd';
export const wallColorHover = '#008cba';
export const wallColorSelected = '#00ba8c';

export const edgeColor = '#888888';
export const edgeColorHover = '#008cba';
export const edgeWidth = 1;

export const deleteColor = '#ff0000';

// corner config
export const cornerRadius = 3;
export const cornerRadiusHover = 6;
export const cornerRadiusSelected = 9;
export const cornerColor = '#cccccc';
export const cornerColorHover = '#008cba';
export const cornerColorSelected = '#00ba8c';

/*
 * The View to be used by a Floorplanner to render in/interact with.
 */
export class FloorplannerView2D {
  constructor(floorplan, viewModel, canvas) {
    this.canvasElement = document.getElementById(canvas);
    this.canvas = canvas;
    this.context = this.canvasElement.getContext('2d');
    this.floorplan = floorplan;
    this.viewModel = viewModel;

    let scope = this;
    this._carbonsheet = new CarbonSheet(floorplan, viewModel, canvas);
    this._carbonsheet.addEventListener(EVENT_UPDATED, function () {
      scope.draw();
    });
    this.floorplan.carbonSheet = this._carbonsheet;

    $(window).resize(() => {
      setTimeout(() => {
        scope.handleWindowResize();
      }, 100);
    });

    $(window).on('orientationchange', () => {
      setTimeout(() => {
        scope.handleWindowResize();
      }, 100);
    });

    setTimeout(() => {
      this.handleWindowResize();
    }, 100);
  }

  get carbonSheet() {
    return this._carbonsheet;
  }

  orientationChange() {
    setTimeout(() => {
      this.handleWindowResize();
    }, 100);
  }

  /* */
  handleWindowResize() {
    let canvasSel = $('#' + this.canvas);
    let parent = canvasSel.parent();
    let w = parent.innerWidth();
    let h = parent.innerHeight();
    canvasSel.height(h);
    canvasSel.width(w);
    this.canvasElement.height = h;
    this.canvasElement.width = w;
    this.draw();
  }

  /* */
  draw() {
    wallWidth = Dimensioning.cmToPixel(
      Configuration.getNumericValue(configWallThickness),
    );
    wallWidthHover =
      Dimensioning.cmToPixel(
        Configuration.getNumericValue(configWallThickness),
      ) * 0.7;
    wallWidthSelected =
      Dimensioning.cmToPixel(
        Configuration.getNumericValue(configWallThickness),
      ) * 0.9;

    this.context.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height,
    );

    this._carbonsheet.draw();
    this.drawGrid();
    this.drawOriginCrossHair();

    // this.context.globalAlpha = 0.3;
    this.floorplan.getRooms().forEach((room) => {
      this.drawRoom(room);
    });
    // this.context.globalAlpha = 1.0;

    this.floorplan.getWalls().forEach((wall) => {
      this.drawWall(wall);
    });
    this.floorplan.getCorners().forEach((corner) => {
      this.drawCorner(corner);
      // this.drawCornerAngles(corner);
    });

    // this.context.globalAlpha = 0.3;
    // this.floorplan.getRooms().forEach((room) => {this.drawRoom(room);});
    // this.context.globalAlpha = 1.0;

    if (this.viewModel.mode == floorplannerModes.DRAW) {
      this.drawTarget(
        this.viewModel.targetX,
        this.viewModel.targetY,
        this.viewModel.lastNode,
      );
      // Enable the below lines for measurement while drawing, still needs work as it is crashing the whole thing
      if (
        this.viewModel.lastNode != null &&
        this.viewModel.lastNode != undefined
      ) {
        let a = new Vector2(
          this.viewModel.lastNode.x,
          this.viewModel.lastNode.y,
        );
        let b = new Vector2(this.viewModel.targetX, this.viewModel.targetY);
        let abVector = b.clone().sub(a);
        let midPoint = abVector.multiplyScalar(0.5).add(a);
        this.drawTextLabel(
          Dimensioning.cmToMeasure(a.distanceTo(b)),
          this.viewModel.convertX(midPoint.x),
          this.viewModel.convertY(midPoint.y),
        );

        // Show angle to the nearest wall
        let vector = b.clone().sub(a);
        let sAngle = (vector.angle() * 180) / Math.PI;
        let result = this.viewModel.lastNode.closestAngle(sAngle);
        let eAngle = result['angle'];
        let closestVector = result['point'].sub(a);

        let textDistance = 60;
        let radius = Math.min(textDistance, vector.length());
        // 	radius = Math.max(radius, )
        let location = vector
          .normalize()
          .add(closestVector.normalize())
          .multiplyScalar(textDistance)
          .add(a);

        let ox = this.viewModel.convertX(this.viewModel.lastNode.x);
        let oy = this.viewModel.convertY(this.viewModel.lastNode.y);
        let angle = Math.abs(eAngle - sAngle);
        angle = angle > 180 ? 360 - angle : angle;
        angle = Math.round(angle * 10) / 10;

        sAngle = (sAngle * Math.PI) / 180;
        eAngle = (eAngle * Math.PI) / 180;

        this.context.strokeStyle = '#FF0000';
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.arc(
          ox,
          oy,
          radius * 0.5,
          Math.min(sAngle, eAngle),
          Math.max(sAngle, eAngle),
          false,
        );
        this.context.stroke();
        this.drawTextLabel(
          `${angle}°`,
          this.viewModel.convertX(location.x),
          this.viewModel.convertY(location.y),
        );
      }
    }
    this.floorplan.getWalls().forEach((wall) => {
      this.drawWallLabels(wall);
    });
    if (this.viewModel._clickedWallControl != null) {
      this.drawCircle(
        this.viewModel.convertX(this.viewModel._clickedWallControl.x),
        this.viewModel.convertY(this.viewModel._clickedWallControl.y),
        7,
        '#F7F7F7',
      );
    }
  }

  /*
   * @deprecated
   */
  zoom() {
    let originX = this.viewModel.canvasElement.innerWidth() / 2.0;
    let originY = this.viewModel.canvasElement.innerHeight() / 2.0;

    if (Configuration.getNumericValue('scale') != 1) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.translate(originX, originY);
      this.context.scale(
        Configuration.getNumericValue('scale'),
        Configuration.getNumericValue('scale'),
      );
      this.context.translate(-originX, -originY);
    } else {
      // this.context.restore();
      this.context.setTransform(1, 0, 0, 1, 0, 0);
    }
    this.draw();
  }

  drawCornerAngles(corner) {
    let ox = this.viewModel.convertX(corner.location.x);
    let oy = this.viewModel.convertY(corner.location.y);
    let offsetRatio = 2.0;
    for (let i = 0; i < corner.angles.length; i++) {
      let direction = corner.angleDirections[i];
      let location = direction.clone().add(corner.location);
      let sAngle = (corner.startAngles[i] * Math.PI) / 180;
      let eAngle = (corner.endAngles[i] * Math.PI) / 180;
      let angle = corner.angles[i];
      let lx = this.viewModel.convertX(location.x);
      let ly = this.viewModel.convertY(location.y);
      let radius = direction.length() * offsetRatio * 0.5;
      if (angle > 130 || angle == 0) {
        continue;
      }
      let ccWise = Math.abs(corner.startAngles[i] - corner.endAngles[i]) > 180;
      this.context.strokeStyle = '#000000';
      this.context.lineWidth = 4;
      this.context.beginPath();
      if (angle == 90) {
        let location2 = direction
          .clone()
          .multiplyScalar(offsetRatio)
          .add(corner.location);
        let lxx = this.viewModel.convertX(location2.x);
        let lyy = this.viewModel.convertY(location2.y);
        let b = { x: lxx, y: oy };
        let c = { x: lxx, y: lyy };
        let d = { x: ox, y: lyy };
        this.drawLine(
          b.x,
          b.y,
          c.x,
          c.y,
          this.context.lineWidth,
          this.context.strokeStyle,
        );
        this.drawLine(
          c.x,
          c.y,
          d.x,
          d.y,
          this.context.lineWidth,
          this.context.strokeStyle,
        );
      } else {
        this.context.arc(
          ox,
          oy,
          radius,
          Math.min(sAngle, eAngle),
          Math.max(sAngle, eAngle),
          ccWise,
        );
      }

      this.context.stroke();
      // this.drawCircle(this.viewModel.convertX(location.x), this.viewModel.convertY(location.y), 7, '#000000');
      this.drawTextLabel(`${angle}°`, lx, ly);
    }
  }

  drawOriginCrossHair() {
    let ox = this.viewModel.convertX(0);
    let oy = this.viewModel.convertY(0);

    // draw origin crosshair
    this.context.fillStyle = '#0000FF';
    this.context.fillRect(ox - 2, oy - 7.5, 4, 15);
    this.context.fillRect(ox - 7.5, oy - 2, 15, 4);
    this.context.strokeStyle = '#FF0000';
    this.context.fillRect(ox - 1.25, oy - 5, 2.5, 10);
    this.context.fillRect(ox - 5, oy - 1.25, 10, 2.5);
  }

  /* */
  drawWallLabels(wall) {
    // we'll just draw the shorter label... idk
    if (wall.backEdge && wall.frontEdge) {
      if (
        wall.backEdge.interiorDistance() < wall.frontEdge.interiorDistance()
      ) {
        this.drawEdgeLabel(wall.backEdge);
        this.drawEdgeLabelExterior(wall.backEdge);
      } else {
        this.drawEdgeLabel(wall.frontEdge);
        this.drawEdgeLabelExterior(wall.frontEdge);
      }
    } else if (wall.backEdge) {
      this.drawEdgeLabel(wall.backEdge);
      this.drawEdgeLabelExterior(wall.backEdge);
    } else if (wall.frontEdge) {
      this.drawEdgeLabel(wall.frontEdge);
      this.drawEdgeLabelExterior(wall.frontEdge);
    }
    this.drawWallLabelsMiddle(wall);
  }

  drawWallLabelsMiddle(wall) {
    if (!wallInformation.midline) {
      return;
    }
    let pos = wall.wallCenter();
    let length = wall.wallLength();
    if (length < 60) {
      // dont draw labels on walls this short
      return;
    }
    let label = !wallInformation.labels ? '' : wallInformation.midlineLabel;
    this.drawTextLabel(
      `${label}${Dimensioning.cmToMeasure(length)}`,
      this.viewModel.convertX(pos.x),
      this.viewModel.convertY(pos.y),
    );
  }

  /* */
  drawEdgeLabelExterior(edge) {
    let pos = edge.exteriorCenter();
    let length = edge.exteriorDistance();
    if (length < 60) {
      // dont draw labels on walls this short
      return;
    }
    if (wallInformation.exterior) {
      let label = !wallInformation.labels ? '' : wallInformation.exteriorLabel;
      this.drawTextLabel(
        `${label}${Dimensioning.cmToMeasure(length)}`,
        this.viewModel.convertX(pos.x),
        this.viewModel.convertY(pos.y + 40),
      );
    }
  }

  /* */
  drawEdgeLabel(edge) {
    let pos = edge.interiorCenter();
    let length = edge.interiorDistance();
    if (length < 60) {
      // dont draw labels on walls this short
      return;
    }
    if (wallInformation.interior) {
      let label = !wallInformation.labels ? '' : wallInformation.interiorLabel;
      this.drawTextLabel(
        `${label}${Dimensioning.cmToMeasure(length)}`,
        this.viewModel.convertX(pos.x),
        this.viewModel.convertY(pos.y - 40),
      );
    }
  }

  drawTextLabel(
    label,
    x,
    y,
    textColor = '#000000',
    strokeColor = '#ffffff',
    style = 'normal',
  ) {
    this.context.font = `${style} 12px Arial`;
    this.context.fillStyle = textColor;
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.strokeStyle = strokeColor;
    this.context.lineWidth = 4;
    this.context.strokeText(label, x, y);
    this.context.fillText(label, x, y);
  }

  /* */
  drawEdge(edge, hover, curved = false) {
    let color = edgeColor;
    if (hover && this.viewModel.mode == floorplannerModes.DELETE) {
      color = deleteColor;
    } else if (hover) {
      color = edgeColorHover;
    }
    let corners = edge.corners();
    let scope = this;
    if (!curved) {
      this.drawPolygon(
        Utils.map(corners, function (corner) {
          return scope.viewModel.convertX(corner.x);
        }),
        Utils.map(corners, function (corner) {
          return scope.viewModel.convertY(corner.y);
        }),
        false,
        null,
        true,
        color,
        edgeWidth,
      );
    }
    // else
    // {
    // this.drawPolygonCurved(edge.curvedCorners(),false,null,true,color,edgeWidth);
    // }
  }

  /* */
  drawWall(wall) {
    let selected = wall === this.viewModel.selectedWall;
    let hover =
      wall === this.viewModel.activeWall && wall != this.viewModel.selectedWall;
    let color = wallColor;

    if (hover && this.viewModel.mode == floorplannerModes.DELETE) {
      color = deleteColor;
    } else if (hover) {
      color = wallColorHover;
    } else if (selected) {
      color = wallColorSelected;
    }
    let isCurved = wall.wallType == WallTypes.CURVED;
    if (wall.wallType == WallTypes.CURVED && selected) {
      // this.drawCircle(this.viewModel.convertX(wall.start.x), this.viewModel.convertY(wall.start.y), 10, '#AAAAAA');
      // this.drawCircle(this.viewModel.convertX(wall.end.x), this.viewModel.convertY(wall.end.y), 10, '#000000');
      // this.drawCircle(this.viewModel.convertX(wall.a.x), this.viewModel.convertY(wall.a.y), 10, '#ff8cd3');
      // this.drawCircle(this.viewModel.convertX(wall.b.x), this.viewModel.convertY(wall.b.y), 10, '#eacd28');
      this.drawLine(
        this.viewModel.convertX(wall.getStartX()),
        this.viewModel.convertY(wall.getStartY()),
        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),
        5,
        '#006600',
      );
      this.drawLine(
        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),
        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),
        5,
        '#006600',
      );
      this.drawLine(
        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),
        this.viewModel.convertX(wall.getEndX()),
        this.viewModel.convertY(wall.getEndY()),
        5,
        '#06600',
      );

      this.drawLine(
        this.viewModel.convertX(wall.getStartX()),
        this.viewModel.convertY(wall.getStartY()),
        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),
        1,
        '#00FF00',
      );
      this.drawLine(
        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),
        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),
        1,
        '#00FF00',
      );
      this.drawLine(
        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),
        this.viewModel.convertX(wall.getEndX()),
        this.viewModel.convertY(wall.getEndY()),
        1,
        '#00FF00',
      );

      this.drawCircle(
        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),
        10,
        '#D7D7D7',
      );
      this.drawCircle(
        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),
        10,
        '#D7D7D7',
      );
    }

    if (wall.wallType == WallTypes.STRAIGHT) {
      this.drawLine(
        this.viewModel.convertX(wall.getStartX()),
        this.viewModel.convertY(wall.getStartY()),
        this.viewModel.convertX(wall.getEndX()),
        this.viewModel.convertY(wall.getEndY()),
        hover ? wallWidthHover : selected ? wallWidthSelected : wallWidth,
        color,
      );
    } else {
      // let p = {x: this.viewModel.mouseX, y: this.viewModel.mouseY};
      // let project = wall.bezier.project(p);
      // this.drawBezierObject(wall.bezier, 10, '#FF0000');
      // this.drawBezierObject(wall.bezier.offset(wall.thickness*0.5)[0], 3, '#F0F0F0');
      // this.drawBezierObject(wall.bezier.offset(-wall.thickness*0.5)[0], 3, '#0F0F0F');
      this.drawCurvedLine(
        this.viewModel.convertX(wall.getStartX()),
        this.viewModel.convertY(wall.getStartY()),

        this.viewModel.convertX(wall.a.x),
        this.viewModel.convertY(wall.a.y),

        this.viewModel.convertX(wall.b.x),
        this.viewModel.convertY(wall.b.y),

        this.viewModel.convertX(wall.getEndX()),
        this.viewModel.convertY(wall.getEndY()),
        hover ? wallWidthHover : selected ? wallWidthSelected : wallWidth,
        color,
      );

      // this.drawLine(this.viewModel.convertX(project.x),this.viewModel.convertY(project.y),this.viewModel.convertX(p.x),this.viewModel.convertY(p.y), 1, '#ff0000');
    }

    if (!hover && !selected && wall.frontEdge) {
      this.drawEdge(wall.frontEdge, hover, isCurved);
    }
    if (!hover && !selected && wall.backEdge) {
      this.drawEdge(wall.backEdge, hover, isCurved);
    }

    if (selected) {
      if (wall.wallType != WallTypes.CURVED) {
        this.drawCornerAngles(wall.start);
        this.drawCornerAngles(wall.end);
      }
    }
    this.drawCircle(
      this.viewModel.canvasElement.innerWidth() / 2.0,
      this.viewModel.canvasElement.innerHeight() / 2.0,
      3,
      '#FF0000',
    );
  }

  /* */
  drawRoom(room) {
    // let scope = this;
    let selected = room === this.viewModel.selectedRoom;
    let hover =
      room === this.viewModel.activeRoom && room != this.viewModel.selectedRoom;
    let color = roomColor;
    if (hover) {
      color = roomColorHover;
    } else if (selected) {
      color = roomColorSelected;
    }
    // this.drawPolygon(
    // 	Utils.map(room.corners, (corner) =>
    // 	{
    // 		return scope.viewModel.convertX(corner.x);
    // 	}),
    // 	Utils.map(room.corners, (corner) =>
    // 	{
    // 		return scope.viewModel.convertY(corner.y);
    // 	}),
    // 	true, color);

    let polygonPoints = [];

    for (let i = 0; i < room.roomCornerPoints.length; i++) {
      polygonPoints.push([room.roomCornerPoints[i]]);
    }

    this.drawPolygonCurved(polygonPoints, true, color);

    this.drawTextLabel(
      Dimensioning.cmToMeasure(room.area, 2) + String.fromCharCode(178),
      this.viewModel.convertX(room.areaCenter.x),
      this.viewModel.convertY(room.areaCenter.y),
      '#0000FF',
      '#00FF0000',
      'bold',
    );
    this.drawTextLabel(
      room.name,
      this.viewModel.convertX(room.areaCenter.x),
      this.viewModel.convertY(room.areaCenter.y + 30),
      '#363636',
      '#00FF0000',
      'bold italic',
    );

    // Debugging Room for correct order of polygon points with room walls
    // if(selected)
    // {
    // for (i=0;i<room.roomCornerPoints.length;i++)
    // {
    // 	let p = room.roomCornerPoints[i];
    //// 	this.drawCircle(this.viewModel.convertX(p.x), this.viewModel.convertY(p.y), 6, '#999999');
    // 	this.drawTextLabel(`p:${i+0}`, this.viewModel.convertX(p.x), this.viewModel.convertY(p.y), '#363636', '#00FF0000', 'bold italic');
    // }
    // }
  }

  /* */
  drawCorner(corner) {
    let cornerX = this.viewModel.convertX(corner.x);
    let cornerY = this.viewModel.convertY(corner.y);
    let hover =
      corner === this.viewModel.activeCorner &&
      corner != this.viewModel.selectedCorner;
    let selected = corner === this.viewModel.selectedCorner;
    let color = cornerColor;
    if (hover && this.viewModel.mode == floorplannerModes.DELETE) {
      color = deleteColor;
    } else if (hover) {
      color = cornerColorHover;
    } else if (selected) {
      color = cornerColorSelected;
    }

    if (selected) {
      this.drawCornerAngles(corner);
      corner.adjacentCorners().forEach((neighbour) => {
        this.drawCornerAngles(neighbour);
      });
    }

    this.drawCircle(
      cornerX,
      cornerY,
      hover
        ? cornerRadiusHover
        : selected
        ? cornerRadiusSelected
        : cornerRadius,
      color,
    );
    // let cx = Dimensioning.roundOff(corner.x, 10);
    // let cy = Dimensioning.roundOff(corner.y, 10);
    // let cornerLabel = `(${cx}, ${cy})`;
    // this.drawTextLabel(cornerLabel, cornerX, cornerY);
  }

  /* */
  drawTarget(x, y, lastNode) {
    this.drawCircle(
      this.viewModel.convertX(x),
      this.viewModel.convertY(y),
      cornerRadiusHover,
      cornerColorHover,
    );
    if (lastNode) {
      this.drawLine(
        this.viewModel.convertX(lastNode.x),
        this.viewModel.convertY(lastNode.y),
        this.viewModel.convertX(x),
        this.viewModel.convertY(y),
        wallWidthHover,
        wallColorHover,
      );
    }
  }

  drawBezierObject(bezier, width = 3, color = '#f0f0f0') {
    this.drawCurvedLine(
      this.viewModel.convertX(bezier.points[0].x),
      this.viewModel.convertY(bezier.points[0].y),

      this.viewModel.convertX(bezier.points[1].x),
      this.viewModel.convertY(bezier.points[1].y),

      this.viewModel.convertX(bezier.points[2].x),
      this.viewModel.convertY(bezier.points[2].y),

      this.viewModel.convertX(bezier.points[3].x),
      this.viewModel.convertY(bezier.points[3].y),
      width,
      color,
    );
  }

  drawCurvedLine(startX, startY, aX, aY, bX, bY, endX, endY, width, color) {
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.bezierCurveTo(aX, aY, bX, bY, endX, endY);
    // this.context.closePath();
    this.context.lineWidth = width + 3;
    this.context.strokeStyle = '#999999';
    this.context.stroke();

    // width is an integer
    // color is a hex string, i.e. #ff0000
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.bezierCurveTo(aX, aY, bX, bY, endX, endY);
    // this.context.closePath();
    this.context.lineWidth = width;
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  /* */
  drawLine(startX, startY, endX, endY, width, color) {
    // width is an integer
    // color is a hex string, i.e. #ff0000
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.lineTo(endX, endY);
    this.context.closePath();
    this.context.lineWidth = width;
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  /* */
  drawPolygonCurved(
    pointSets,
    fill = true,
    fillColor = '#FF00FF',
    stroke = false,
    strokeColor = '#000000',
    strokeWidth = 5,
  ) {
    // fillColor is a hex string, i.e. #ff0000
    fill = fill || false;
    stroke = stroke || false;
    this.context.beginPath();

    for (let i = 0; i < pointSets.length; i++) {
      let pointset = pointSets[i];
      // The pointset represents a straight line if there are only 1 point in the pointset
      if (pointset.length == 1) {
        if (i == 0) {
          this.context.moveTo(
            this.viewModel.convertX(pointset[0].x),
            this.viewModel.convertY(pointset[0].y),
          );
        } else {
          this.context.lineTo(
            this.viewModel.convertX(pointset[0].x),
            this.viewModel.convertY(pointset[0].y),
          );
        }
      }
      // If the pointset contains 3 points then it represents a bezier curve, ap1, ap2, cp2
      else if (pointset.length == 3) {
        this.context.bezierCurveTo(
          this.viewModel.convertX(pointset[0].x),
          this.viewModel.convertY(pointset[0].y),
          this.viewModel.convertX(pointset[1].x),
          this.viewModel.convertY(pointset[1].y),
          this.viewModel.convertX(pointset[2].x),
          this.viewModel.convertY(pointset[2].y),
        );
      }
    }

    this.context.closePath();
    if (fill) {
      this.context.fillStyle = fillColor;
      this.context.fill();
    }
    if (stroke) {
      this.context.lineWidth = strokeWidth;
      this.context.strokeStyle = strokeColor;
      this.context.stroke();
    }

    // Debugging
    // for (i=0;i<pointSets.length;i++)
    // {
    // pointset = pointSets[i];
    // if(pointset.length == 3)
    // {
    // 	this.drawCircle(this.viewModel.convertX(pointset[0].x), this.viewModel.convertY(pointset[0].y), 5, '#ff0000');
    // 	this.drawCircle(this.viewModel.convertX(pointset[1].x), this.viewModel.convertY(pointset[1].y), 5, '#0000ff');
    // }
    // }
  }

  /* */
  drawPolygon(xArr, yArr, fill, fillColor, stroke, strokeColor, strokeWidth) {
    // fillColor is a hex string, i.e. #ff0000
    fill = fill || false;
    stroke = stroke || false;
    this.context.beginPath();
    this.context.moveTo(xArr[0], yArr[0]);
    for (let i = 1; i < xArr.length; i++) {
      this.context.lineTo(xArr[i], yArr[i]);
    }
    this.context.closePath();
    if (fill) {
      this.context.fillStyle = fillColor;
      this.context.fill();
    }
    if (stroke) {
      this.context.lineWidth = strokeWidth;
      this.context.strokeStyle = strokeColor;
      this.context.stroke();
    }
  }

  /* */
  drawCircle(centerX, centerY, radius, fillColor) {
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    this.context.closePath();
    this.context.fillStyle = fillColor;
    this.context.fill();
  }

  /* returns n where -gridSize/2 < n <= gridSize/2  */
  calculateGridOffset(n) {
    let gSpacing = Dimensioning.cmToPixel(
      Configuration.getNumericValue(gridSpacing),
    );
    if (n >= 0) {
      return ((n + gSpacing / 2.0) % gSpacing) - gSpacing / 2.0;
    } else {
      return ((n - gSpacing / 2.0) % gSpacing) + gSpacing / 2.0;
    }
  }

  /* */
  drawGrid() {
    let gSpacing = Dimensioning.cmToPixel(
      Configuration.getNumericValue(gridSpacing),
    );
    let offsetX = this.calculateGridOffset(-this.viewModel.originX);
    let offsetY = this.calculateGridOffset(-this.viewModel.originY);
    let width = this.canvasElement.width;
    let height = this.canvasElement.height;
    let scale = Configuration.getNumericValue('scale');
    if (scale < 1.0) {
      width = width / scale;
      height = height / scale;
    }

    for (let x = 0; x <= width / gSpacing; x++) {
      this.drawLine(
        gSpacing * x + offsetX,
        0,
        gSpacing * x + offsetX,
        height,
        gridWidth,
        gridColor,
      );
    }
    for (let y = 0; y <= height / gSpacing; y++) {
      this.drawLine(
        0,
        gSpacing * y + offsetY,
        width,
        gSpacing * y + offsetY,
        gridWidth,
        gridColor,
      );
    }
  }
}
