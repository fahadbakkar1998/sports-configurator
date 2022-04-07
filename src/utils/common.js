export const degToRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export var WallProperties = function () {
  this.textures = [
    ['assets/rooms/textures/wallmap.png', true, 1],
    ['assets/rooms/textures/wallmap_yellow.png', true, 1],
    ['assets/rooms/textures/light_brick.jpg', false, 50],
    ['assets/rooms/textures/marbletiles.jpg', false, 300],
    ['assets/rooms/textures/light_brick.jpg', false, 100],
    ['assets/rooms/textures/light_fine_wood.jpg', false, 300],
    ['assets/rooms/textures/hardwood.png', false, 300],
  ];

  this.floorMaterialName = 0;
  this.wallMaterialName = 0;
  this.forAllWalls = false;
  this.currentWall = null;
  this.currentFloor = null;

  this.wallChanged = function () {
    if (this.currentWall) {
      this.currentWall.setTexture(
        this.textures[this.wallMaterialName][0],
        this.textures[this.wallMaterialName][1],
        this.textures[this.wallMaterialName][2],
      );
    }
    if (this.currentFloor && this.forAllWalls) {
      this.currentFloor.setRoomWallsTexture(
        this.textures[this.wallMaterialName][0],
        this.textures[this.wallMaterialName][1],
        this.textures[this.wallMaterialName][2],
      );
    }
  };

  this.floorChanged = function () {
    if (this.currentFloor) {
      this.currentFloor.setTexture(
        this.textures[this.floorMaterialName][0],
        this.textures[this.floorMaterialName][1],
        this.textures[this.floorMaterialName][2],
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

export const getUFloat = (val) => {
  let newVal = parseFloat(val);
  (!newVal || newVal < 0) && (newVal = 0);
  return newVal;
};

export const getFloat = (val) => {
  let newVal = parseFloat(val);
  !newVal && (newVal = 0);
  return newVal;
};
