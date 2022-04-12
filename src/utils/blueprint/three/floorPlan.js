import { EventDispatcher } from 'three';
import { EVENT_UPDATED } from '../core/events.js';
import { Floor } from './floor.js';
import { Roof } from './roof';
import { Edge } from './edge.js';

export class Floorplan3D extends EventDispatcher {
  constructor(scene, floorPlan, controls, three) {
    super();
    this.scene = scene;
    this.floorplan = floorPlan;
    this.controls = controls;
    this.floors = [];
    this.roofs = [];
    this.edges = [];
    this.three = three;
    let scope = this;
    this.updatedRoomsEvent = () => {
      scope.redraw();
    };
    this.floorplan.addEventListener(EVENT_UPDATED, this.updatedRoomsEvent);
  }

  switchWireFrame(flag) {
    this.floors.forEach((floor) => {
      floor.switchWireFrame(flag);
    });
    this.edges.forEach((edge) => {
      edge.switchWireFrame(flag);
    });
  }

  redraw() {
    let scope = this;

    // clear scene
    this.floors.forEach((floor) => {
      floor.removeFromScene();
    });
    this.roofs.forEach((roof) => {
      roof.removeFromScene();
    });
    this.edges.forEach((edge) => {
      edge.remove();
    });
    this.floors = [];
    this.roofs = [];
    this.edges = [];

    // draw floors and roofs
    this.floorplan.getRooms().forEach((room) => {
      const threeFloor = new Floor(this.scene, room, this.three);
      this.floors.push(threeFloor);
      threeFloor.addToScene();
      const threeRoof = new Roof({
        scene: this.scene,
        room,
        three: this.three,
      });
      this.roofs.push(threeRoof);
      threeRoof.addToScene();
    });

    // draw edges
    let eIndex = 0;
    this.floorplan.wallEdges().forEach((edge) => {
      let threeEdge = new Edge(scope.scene, edge, scope.controls);
      threeEdge.name = 'edge_' + eIndex;
      this.edges.push(threeEdge);
      eIndex += 1;
    });
  }

  showRoof(flag) {
    // draw floors
    this.floors.forEach((threeFloor) => {
      threeFloor.showRoof(flag);
    });
  }
}
