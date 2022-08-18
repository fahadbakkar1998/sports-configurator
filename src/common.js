import { Face3, Vector2 } from 'three';

export const degToRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export const getUFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  (!newVal || newVal < 0) && (newVal = 0);
  const dotIndex = val.indexOf('.');
  val && dotIndex === val.length - 1 && (newVal += '.');
  return newVal;
};

export const getFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  !newVal && (newVal = 0);
  const dotIndex = val.indexOf('.');
  val && dotIndex === val.length - 1 && (newVal += '.');
  return newVal;
};

export const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = ({ r, g, b }) => {
  const hex =
    '#' +
    componentToHex(parseInt(r * 255)) +
    componentToHex(parseInt(g * 255)) +
    componentToHex(parseInt(b * 255));
  return hex;
};

export const equals = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

export const addFaces = (geometry) => {
  if (geometry.vertices.length >= 3) {
    for (let i = 0; i < geometry.vertices.length - 2; i += 2) {
      geometry.faces.push(new Face3(i, i + 1, i + 2));
      geometry.faceVertexUvs[0].push([
        new Vector2(0, 0),
        new Vector2(0, 1),
        new Vector2(1, 1),
      ]);
      if (geometry.vertices.length > i + 3) {
        geometry.faces.push(new Face3(i, i + 2, i + 3));
        geometry.faceVertexUvs[0].push([
          new Vector2(0, 0),
          new Vector2(1, 1),
          new Vector2(1, 0),
        ]);
      }
    }
  }
};

export const isLeafComponent = (comp) => {
  if (
    !comp ||
    !comp.value ||
    typeof comp.value === 'number' ||
    typeof comp.value === 'string'
  )
    return true;
  if (Array.isArray(comp.value)) {
    for (let i in comp.value) {
      if (!isLeafComponent(comp.value[i])) {
        return false;
      }
    }
  } else return false;
  return true;
};
