import {
  Mesh,
  Matrix4,
  Vector2,
  Vector3,
  MeshBasicMaterial,
  AdditiveBlending,
} from 'three';
import { CanvasTexture, PlaneGeometry, DoubleSide, BoxHelper } from 'three';
import { Color } from 'three';
import { Utils } from '../core/utils.js';
import { Dimensioning } from '../core/dimensioning.js';
import { floorPlanerScale, minGap } from '../core/constants';
import { decimalPlaces } from '../../../constants.js';

/*
 * An Item is an abstract entity for all things placed in the scene, e.g. at
 * walls or on the floor.
 */
export class Item extends Mesh {
  constructor({
    model,
    metadata,
    geometry,
    material,
    position,
    rotation,
    scale,
  }) {
    super(geometry, material);

    this.model = model;
    this.metadata = metadata;
    this.geometry = geometry;
    this.material = material;

    // center in its bounding box
    this.geometry.computeBoundingBox();
    this.geometry.applyMatrix(
      new Matrix4().makeTranslation(
        -0.5 *
          (this.geometry.boundingBox.max.x + this.geometry.boundingBox.min.x),
        -0.5 *
          (this.geometry.boundingBox.max.y + this.geometry.boundingBox.min.y),
        -0.5 *
          (this.geometry.boundingBox.max.z + this.geometry.boundingBox.min.z),
      ),
    );
    this.geometry.computeBoundingBox();

    /* */
    this.errorGlow = new Mesh();
    /* */
    this.hover = false;
    /* */
    this.selected = false;
    /* */
    this.highlighted = false;
    /* */
    this.error = false;
    /* */
    this.emissiveColor = 0x444444;
    /* Does this object affect other floor items */
    this.obstructFloorMoves = true;
    /* */
    this.position_set = false;
    /* Show rotate option in context menu */
    this.allowRotate = true;
    /* */
    this.fixed = false;
    /* dragging */
    this.dragOffset = new Vector3();
    /* */
    this.halfSize = new Vector3(0, 0, 0);
    this.bHelper = null;

    this.scene = this.model.scene.scene;
    this._freePosition = true;

    if (!this.material.color) {
      this.material.color = new Color('#FFFFFF');
    }
    this.wireMaterial = new MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });

    this.errorColor = 0xff0000;

    this.resizable = metadata.resizable;

    this.castShadow = true;
    this.receiveShadow = false;

    this.originalMaterial = material;
    this.texture = this.material.texture;

    if (position) {
      this.position.copy(position);
      this.position_set = true;
    }

    this.halfSize = this.objectHalfSize();

    this.canvasWH = document.createElement('canvas');
    this.canvasWH.width = this.getWidth() + 1.0;
    this.canvasWH.height = this.getHeight() + 1.0;
    this.canvasContextWH = this.canvasWH.getContext('2d');
    this.canvasTextureWH = new CanvasTexture(this.canvasWH);
    this.canvasMaterialWH = new MeshBasicMaterial({
      map: this.canvasTextureWH,
      side: DoubleSide,
      transparent: true,
    });
    this.canvasPlaneWH = new Mesh(
      new PlaneGeometry(this.getWidth(), this.getHeight(), 1, 1),
      this.canvasMaterialWH,
    );
    this.canvasPlaneWH.scale.set(1, 1, 1);
    this.canvasPlaneWH.position.set(0, 0, this.getDepth() * 0.5 + minGap);

    this.canvasWD = document.createElement('canvas');
    this.canvasWD.width = this.getWidth() + 1.0;
    this.canvasWD.height = this.getDepth() + 1.0;
    this.canvasContextWD = this.canvasWD.getContext('2d');
    this.canvasTextureWD = new CanvasTexture(this.canvasWD);
    this.canvasMaterialWD = new MeshBasicMaterial({
      map: this.canvasTextureWD,
      side: DoubleSide,
      transparent: true,
    });
    this.canvasPlaneWD = new Mesh(
      new PlaneGeometry(this.getWidth(), this.getDepth(), 1, 1),
      this.canvasMaterialWD,
    );
    this.canvasPlaneWD.rotateX(-Math.PI * 0.5);
    this.canvasPlaneWD.scale.set(1, 1, 1);
    this.canvasPlaneWD.position.set(0, this.getHeight() * 0.5 + minGap, 0);

    this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = false;
    this.add(this.canvasPlaneWH);
    this.add(this.canvasPlaneWD);
    this.resizeProportionally = false;

    if (rotation) {
      this.rotation.y = rotation;
    }

    if (scale) {
      this.setScale(scale.x, scale.y, scale.z);
    }

    if (this.metadata.materialColors) {
      if (this.metadata.materialColors.length) {
        if (this.material.length) {
          for (let i = 0; i < this.metadata.materialColors.length; i++) {
            this.material[i].color = new Color(this.metadata.materialColors[i]);
          }
        } else {
          this.material.color = new Color(this.metadata.materialColors[0]);
        }
      }
    }

    this.setStaticSizeNo = metadata.staticSizeNo || 0;
    const length =
      metadata.accessories && metadata.accessories.length
        ? metadata.accessories.length
        : 0;
    this.accessoryNos = metadata.accessoryNos || Array(length).fill(0);
  }

  /**
   * @param {string | number} no
   */
  set setStaticSizeNo(no) {
    no = parseInt(no) || 0;
    if (no < 0) return;
    if (this.metadata) {
      this.staticSizeNo = no;
      if (no > 0) {
        if (this.metadata.staticSizes && this.metadata.staticSizes[no - 1]) {
          const staticSize = this.metadata.staticSizes[no - 1];
          const width = Dimensioning.cmFromMeasureRaw(
            staticSize.width,
            staticSize.unit,
          );
          // console.log(
          //   'item static width: ',
          //   staticSize.width,
          //   staticSize.unit,
          //   width,
          // );
          const height = Dimensioning.cmFromMeasureRaw(
            staticSize.height,
            staticSize.unit,
          );
          const depth = Dimensioning.cmFromMeasureRaw(
            staticSize.length,
            staticSize.unit,
          );
          this.resize({
            width,
            height,
            depth,
            proportionally: !width || !height || !depth,
          });
        }
      } else {
        if (this.metadata.default_size) {
          const defaultSize = this.metadata.default_size;
          const width = Dimensioning.cmFromMeasureRaw(
            defaultSize.width,
            defaultSize.unit,
          );
          // console.log(
          //   'item default width: ',
          //   defaultSize.width,
          //   defaultSize.unit,
          //   width,
          // );
          const height = Dimensioning.cmFromMeasureRaw(
            defaultSize.height,
            defaultSize.unit,
          );
          const depth = Dimensioning.cmFromMeasureRaw(
            defaultSize.length,
            defaultSize.unit,
          );
          this.resize({
            width,
            height,
            depth,
            proportionally: !width || !height || !depth,
          });
        }
      }
    }
  }

  get freePosition() {
    return this._freePosition;
  }

  refreshItem() {
    this.halfSize = this.objectHalfSize();
    this.canvasPlaneWH.geometry = new PlaneGeometry(
      this.getWidth(),
      this.getHeight(),
      1,
      1,
    );
    this.canvasPlaneWH.position.set(0, 0, this.getDepth() * 0.5 + 0.3);
    this.canvasPlaneWD.geometry = new PlaneGeometry(
      this.getWidth(),
      this.getDepth(),
      1,
      1,
    );
    this.canvasPlaneWD.position.set(0, this.getHeight() * 0.5 + 0.3, 0);
  }

  updateCanvasTexture(canvas, context, material, w, h, wPrefix, hPrefix) {
    if (w < 1 || h < 1) {
      return;
    }

    wPrefix = wPrefix ? wPrefix : 'w:';
    hPrefix = hPrefix ? hPrefix : 'h:';

    w *= 3;
    h *= 3;

    canvas.width = w;
    canvas.height = h;
    canvas.style.letterSpacing = '-22.5px';

    context.font = 'bold 45pt Courier';
    context.fillStyle = '#DADADA99';
    context.fillRect(0, 0, w, h);
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.lineWidth = 3;
    context.setLineDash([1, 2]);
    context.strokeStyle = '#000000';

    context.beginPath();
    context.moveTo(0, h * 0.5);
    context.lineTo(w, h * 0.5);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(w * 0.125, 0);
    context.lineTo(w * 0.125, h);
    context.closePath();
    context.stroke();

    context.lineWidth = 1;
    context.setLineDash([0]);
    context.strokeStyle = '#0000FF';
    context.strokeText(
      wPrefix + Dimensioning.cmToMeasure(w / 3),
      w * 0.5,
      h * 0.5,
    );

    context.fillStyle = '#FF0000';
    context.fillText(
      wPrefix + Dimensioning.cmToMeasure(w / 3),
      w * 0.5,
      h * 0.5,
    );

    context.translate(w * 0.125, 0);
    context.rotate(Math.PI * 0.5);
    context.strokeStyle = '#0000FF';
    context.strokeText(hPrefix + Dimensioning.cmToMeasure(h / 3), h * 0.5, 0);

    context.fillStyle = '#FF0000';
    context.fillText(hPrefix + Dimensioning.cmToMeasure(h / 3), h * 0.5, 0);
    context.restore();
    material.map.needsUpdate = true;
  }

  switchWireFrame(flag) {
    this.material = flag ? this.wireMaterial : this.originalMaterial;
  }

  /* */
  remove() {
    this.model.scene.removeItem(this);
  }

  /* */
  resize({ height, width, depth, proportionally }) {
    if (!this.resizable) return;
    if (!width) width = this.getWidth();
    if (!height) height = this.getHeight();
    if (!depth) depth = this.getDepth();
    let x = width / this.getWidth();
    let y = height / this.getHeight();
    let z = depth / this.getDepth();

    if (this.resizeProportionally || proportionally) {
      if (Math.abs(width - this.getWidth()) > 0.1) {
        this.setScale(x, x, x);
      } else if (Math.abs(height - this.getHeight()) > 0.1) {
        this.setScale(y, y, y);
      } else {
        this.setScale(z, z, z);
      }
      return;
    }
    this.setScale(x, y, z);
  }

  getMaterial() {
    return this.material;
  }

  getMaterialColor(index) {
    index = index ? index : 0;
    if (this.material.length) {
      return '#' + this.material[index].color.getHexString();
    }
    return '#' + this.material.color.getHexString();
  }

  // Always send an hexadecimal string value for color - ex. '#FFFFFF'
  setMaterialColor(color, index) {
    let c = new Color(color);
    if (this.material.length) {
      index = index ? index : 0;
      this.material[index].color = c;
      return;
    }
    this.material.color = c;
  }

  /* */
  setScale(x, y, z) {
    let scaleVec = new Vector3(x, y, z);
    this.halfSize.multiply(scaleVec);
    scaleVec.multiply(this.scale);
    this.scale.set(scaleVec.x, scaleVec.y, scaleVec.z);
    this.resized();
    this.bHelper && this.bHelper.update();
    this.updateCanvasTexture(
      this.canvasWH,
      this.canvasContextWH,
      this.canvasMaterialWH,
      this.getWidth(),
      this.getHeight(),
      'w:',
      'h:',
    );
    this.updateCanvasTexture(
      this.canvasWD,
      this.canvasContextWD,
      this.canvasMaterialWD,
      this.getWidth(),
      this.getDepth(),
      'w:',
      'd:',
    );
    this.scene.needsUpdate = true;
  }

  getProportionalResize() {
    return this.resizeProportionally;
  }

  setProportionalResize(flag) {
    this.resizeProportionally = flag;
  }

  /* */
  setFixed(fixed) {
    this.fixed = fixed;
  }

  /* Subclass can define to take action after a resize. */
  resized() {}

  /* */
  getHeight() {
    return this.halfSize.y * 2.0;
  }

  /* */
  getWidth() {
    return this.halfSize.x * 2.0;
  }

  /* */
  getDepth() {
    return this.halfSize.z * 2.0;
  }

  /* */
  placeInRoom() {}

  /* */
  initObject() {
    this.placeInRoom();

    // adjust size
    if (
      this.getWidth() + this.getHeight() + this.getDepth() <
      50 * floorPlanerScale
    ) {
      this.resize({ width: 50, proportionally: true });
    }

    // this.bHelper = new BoxHelper(this);
    // this.scene.add(this.bHelper);
    // this.bHelper.visible = false;
    this.scene.needsUpdate = true;
  }

  /* */
  removed() {}

  /* on is a bool */
  updateHighlight() {
    let on = this.hover || this.selected;
    this.highlighted = on;
    let hex = on ? this.emissiveColor : 0x000000;
    if (this.material) {
      if (this.material.length) {
        this.material.forEach((material) => {
          // TODO_Ekki emissive doesn't exist anymore?
          if (material.emissive) {
            material.emissive.setHex(hex);
            material.emissive = new Color(hex);
          }
        });
      } else {
        if (this.material.emissive) {
          this.material.emissive.setHex(hex);
          this.material.emissive = new Color(hex);
        }
      }
    }
  }

  /* */
  mouseOver() {
    this.hover = true;
    this.updateHighlight();
  }

  /* */
  mouseOff() {
    this.hover = false;
    this.updateHighlight();
  }

  /* */
  setSelected() {
    this.setScale(1, 1, 1);
    this.selected = true;
    this.bHelper && (this.bHelper.visible = true);
    this.metadata.format !== 'configurator' &&
      (this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = true);
    this.updateHighlight();
  }

  /* */
  setUnselected() {
    this.selected = false;
    this.bHelper && (this.bHelper.visible = false);
    this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = false;
    this.updateHighlight();
  }

  /* intersection has attributes point (vec3) and object (THREE.Mesh) */
  clickPressed(intersection) {
    this.dragOffset.copy(intersection.point).sub(this.position);
  }

  /* */
  clickDragged(intersection) {
    if (intersection) {
      this.moveToPosition(
        intersection.point.sub(this.dragOffset),
        intersection,
      );
    }
  }

  /* */
  rotate(intersection) {
    if (intersection) {
      let angle = Utils.angle(
        new Vector2(0, 1),
        new Vector2(
          intersection.point.x - this.position.x,
          intersection.point.z - this.position.z,
        ),
      );
      let snapTolerance = Math.PI / 16.0;
      // snap to intervals near Math.PI/2
      for (let i = -4; i <= 4; i++) {
        if (Math.abs(angle - i * (Math.PI / 2)) < snapTolerance) {
          angle = i * (Math.PI / 2);
          break;
        }
      }
      this.rotation.y = angle;
    }
  }

  /* */
  moveToPosition(vec3) {
    this.position.copy(vec3);
    this.bHelper && this.bHelper.update();
  }

  /* */
  clickReleased() {
    if (this.error) {
      this.hideError();
    }
  }

  /*
   * Returns an array of planes to use other than the ground plane for passing
   * intersection to clickPressed and clickDragged
   */
  customIntersectionPlanes() {
    return [];
  }

  /*
   * returns the 2d corners of the bounding polygon
   *
   * offset is Vector3 (used for getting corners of object at a new position)
   *
   * TODO: handle rotated objects better!
   */
  getCorners(xDim, yDim, position) {
    position = position || this.position;
    let halfSize = this.halfSize.clone();
    // console.log('half size: ', halfSize);
    let c1 = new Vector3(-halfSize.x, 0, -halfSize.z);
    let c2 = new Vector3(halfSize.x, 0, -halfSize.z);
    let c3 = new Vector3(halfSize.x, 0, halfSize.z);
    let c4 = new Vector3(-halfSize.x, 0, halfSize.z);

    let transform = new Matrix4();
    transform.makeRotationY(this.rotation.y); // + Math.PI/2)

    c1.applyMatrix4(transform);
    c2.applyMatrix4(transform);
    c3.applyMatrix4(transform);
    c4.applyMatrix4(transform);

    c1.add(position);
    c2.add(position);
    c3.add(position);
    c4.add(position);

    // halfSize.applyMatrix4(transform);

    // let min = position.clone().sub(halfSize);
    // let max = position.clone().add(halfSize);

    let corners = [
      { x: c1.x, y: c1.z },
      { x: c2.x, y: c2.z },
      { x: c3.x, y: c3.z },
      { x: c4.x, y: c4.z },
    ];
    return corners;
  }

  /* */
  isValidPosition() {
    return false;
  }

  /* */
  showError(vec3) {
    vec3 = vec3 || this.position;
    if (!this.error) {
      this.error = true;
      this.errorGlow = this.createGlow(this.errorColor, 0.8, true);
      this.scene.add(this.errorGlow);
    }
    this.errorGlow.position.copy(vec3);
  }

  /* */
  hideError() {
    if (this.error) {
      this.error = false;
      this.scene.remove(this.errorGlow);
    }
  }

  /* */
  objectHalfSize() {
    // let objectBox = new Box3();
    // objectBox.setFromObject(this);
    this.geometry.computeBoundingBox();
    let objectBox = this.geometry.boundingBox.clone();
    const halfSize = objectBox.max.clone().sub(objectBox.min).divideScalar(2);
    // console.log('object half size: ', halfSize);
    return halfSize;
  }

  /* */
  createGlow(color, opacity, ignoreDepth) {
    ignoreDepth = ignoreDepth || false;
    opacity = opacity || 0.2;
    let glowMaterial = new MeshBasicMaterial({
      color: color,
      blending: AdditiveBlending,
      opacity: 0.2,
      transparent: true,
      depthTest: !ignoreDepth,
    });
    let glow = new Mesh(this.geometry.clone(), glowMaterial);
    glow.position.copy(this.position);
    glow.rotation.copy(this.rotation);
    glow.scale.copy(this.scale);
    return glow;
  }

  getMetaData() {
    let matAttribs = [];
    if (this.material.length) {
      this.material.forEach((mat) => {
        matAttribs.push('#' + mat.color.getHexString());
      });
    } else {
      matAttribs.push('#' + this.material.color.getHexString());
    }
    return {
      ...this.metadata,
      xPos: this.position.x,
      yPos: this.position.y,
      zPos: this.position.z,
      rotation: this.rotation.y,
      scale_x: this.scale.x,
      scale_y: this.scale.y,
      scale_z: this.scale.z,
      fixed: this.fixed,
      materialColors: matAttribs,
      staticSizeNo: this.staticSizeNo,
      accessoryNos: this.accessoryNos,
    };
  }

  getPrice() {
    let cost3 = 0,
      metadata3,
      defaultSize3,
      staticSize3;

    if (this.metadata) {
      metadata3 = this.metadata;

      if (metadata3.default_size) {
        defaultSize3 = metadata3.default_size;

        if (defaultSize3.price) {
          cost3 = defaultSize3.price;
        } else if (defaultSize3.pricePerUnit && defaultSize3.unit) {
          const width = Dimensioning.cmToMeasureRaw(
            this.getWidth(),
            1,
            defaultSize3.unit,
          );
          const height = Dimensioning.cmToMeasureRaw(
            this.getHeight(),
            1,
            defaultSize3.unit,
          );
          const length = Dimensioning.cmToMeasureRaw(
            this.getDepth(),
            1,
            defaultSize3.unit,
          );
          cost3 = defaultSize3.pricePerUnit * width * height * length;
        }
      }

      if (
        this.staticSizeNo &&
        metadata3.staticSizes &&
        metadata3.staticSizes[this.staticSizeNo - 1]
      ) {
        staticSize3 = metadata3.staticSizes[this.staticSizeNo - 1];

        if (staticSize3.extraPrice) {
          cost3 += staticSize3.extraPrice;
        }
      }

      this.accessoryNos.forEach((accessoryNo, accessoryKey) => {
        if (
          accessoryNo > 0 &&
          metadata3.accessories[accessoryKey].types[accessoryNo - 1].extraPrice
        ) {
          cost3 +=
            metadata3.accessories[accessoryKey].types[accessoryNo - 1]
              .extraPrice;
        }
      });
    }

    cost3 = parseInt(cost3.toFixed(0));
    return cost3;
  }
}
