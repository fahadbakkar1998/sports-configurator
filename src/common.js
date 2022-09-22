import { Face3, Vector2, Geometry, Vector3 } from 'three';
import { decimalPlaces } from './constants';

export const degToRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export const getUFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  (!newVal || newVal < 0) && (newVal = 0);
  const dotIndex = val.indexOf('.');

  if (val) {
    if (dotIndex === val.length - 1) {
      newVal += '.';
    } else if (dotIndex < val.length - 3) {
      newVal = newVal.toFixed(decimalPlaces);
    }
  }

  return newVal;
};

export const getFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  !newVal && (newVal = 0);
  const dotIndex = val.indexOf('.');

  if (val) {
    if (dotIndex === val.length - 1) {
      newVal += '.';
    } else if (dotIndex < val.length - 3) {
      newVal = newVal.toFixed(decimalPlaces);
    }
  }

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

export const addToMaterials = (materials, newMaterial) => {
  const index = materials.findIndex((el) => el.name === newMaterial.name);
  if (index > -1) return index;
  else {
    materials.push(newMaterial);
    return materials.length - 1;
  }
};

export const getSingleGeoMatOfGltf = (model) => {
  let newMaterials = [];
  let newGeometry = new Geometry();

  model.scene.traverse(function (child) {
    if (child.type == 'Mesh') {
      let materialIndices = [];
      if (child.material.length) {
        for (let k = 0; k < child.material.length; k++) {
          materialIndices.push(addToMaterials(newMaterials, child.material[k]));
        }
      } else {
        materialIndices.push(addToMaterials(newMaterials, child.material));
      }
      if (child.geometry.isBufferGeometry) {
        let tGeometry = new Geometry().fromBufferGeometry(child.geometry);
        tGeometry.faces.forEach((face) => {
          face.materialIndex = materialIndices[face.materialIndex];
        });
        child.updateMatrix();
        newGeometry.merge(tGeometry, child.matrix);
      } else {
        child.geometry.faces.forEach((face) => {
          face.materialIndex = materialIndices[face.materialIndex];
        });
        child.updateMatrix();
        newGeometry.mergeMesh(child);
      }
    }
  });

  return { geometry: newGeometry, material: newMaterials };
};

export const getMeshSize = (mesh) => {
  mesh.geometry.computeBoundingBox();
  const objectBox = mesh.geometry.boundingBox.clone();
  return objectBox.max.clone().sub(objectBox.min);
};

export const setMeshSize = ({
  mesh,
  width,
  height,
  length,
  proportionally,
}) => {
  if (!mesh || (!width && !height && !length)) return;
  const meshSize = getMeshSize(mesh);

  if (proportionally) {
    let scaleValue;
    if (width) scaleValue = width / meshSize.x;
    if (height) scaleValue = height / meshSize.y;
    if (length) scaleValue = length / meshSize.z;
    mesh.scale.copy(new Vector3(scaleValue, scaleValue, scaleValue));
  } else {
    if (width) mesh.scale.x = width / meshSize.x;
    if (height) mesh.scale.y = height / meshSize.y;
    if (length) mesh.scale.z = length / meshSize.z;
  }
};
