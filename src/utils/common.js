export const degToRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export var wallProperties = function () {
  this.textures = [
    ['assets/rooms/textures/wallmap.png', true, 1],
    ['assets/rooms/textures/wallmap_yellow.png', true, 1],
    ['assets/rooms/textures/light_brick.jpg', false, 50],
    ['assets/rooms/textures/marbletiles.jpg', false, 300],
    ['assets/rooms/textures/light_brick.jpg', false, 100],
    ['assets/rooms/textures/light_fine_wood.jpg', false, 300],
    ['assets/rooms/textures/hardwood.png', false, 300],
  ];

  this.floormaterialname = 0;
  this.wallmaterialname = 0;

  this.forAllWalls = false;

  this.currentWall = null;
  this.currentFloor = null;

  this.wchanged = function () {
    if (this.currentWall) {
      this.currentWall.setTexture(
        this.textures[this.wallmaterialname][0],
        this.textures[this.wallmaterialname][1],
        this.textures[this.wallmaterialname][2],
      );
    }
    if (this.currentFloor && this.forAllWalls) {
      this.currentFloor.setRoomWallsTexture(
        this.textures[this.wallmaterialname][0],
        this.textures[this.wallmaterialname][1],
        this.textures[this.wallmaterialname][2],
      );
    }
  };

  this.fchanged = function () {
    if (this.currentFloor) {
      this.currentFloor.setTexture(
        this.textures[this.floormaterialname][0],
        this.textures[this.floormaterialname][1],
        this.textures[this.floormaterialname][2],
      );
    }
  };

  this.setWall = function (wall) {
    this.currentWall = wall;
  };

  this.setFloor = function (floor) {
    this.currentFloor = floor;
  };
};
