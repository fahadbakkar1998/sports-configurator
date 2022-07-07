import { Face3, Vector2 } from 'three';

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
