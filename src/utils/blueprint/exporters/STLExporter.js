/*
 * @author kovacsv / http://kovacsv.hu/
 * @author mrdoob / http://mrdoob.com/
 * @author mudcube / http://mudcu.be/
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Usage:
 *  let exporter = new THREE.STLExporter();
 *
 *  // second argument is a list of options
 *  let data = exporter.parse( mesh, { binary: true } );
 *
 */

THREE.STLExporter = function () {};

THREE.STLExporter.prototype = {

	constructor: THREE.STLExporter,

	parse: ( function () {

		let vector = new THREE.Vector3();
		let normalMatrixWorld = new THREE.Matrix3();

		return function parse( scene, options ) {

			if ( options === undefined ) options = {};

			let binary = options.binary !== undefined ? options.binary : false;

			//

			let objects = [];
			let triangles = 0;

			scene.traverse( function ( object ) {

				if ( object.isMesh ) {

					let geometry = object.geometry;

					if ( geometry.isBufferGeometry ) {

						geometry = new THREE.Geometry().fromBufferGeometry( geometry );

					}

					if ( geometry.isGeometry ) {

						triangles += geometry.faces.length;

						objects.push( {

							geometry: geometry,
							matrixWorld: object.matrixWorld

						} );

					}

				}

			} );

			if ( binary ) {

				let offset = 80; // skip header
				let bufferLength = triangles * 2 + triangles * 3 * 4 * 4 + 80 + 4;
				let arrayBuffer = new ArrayBuffer( bufferLength );
				let output = new DataView( arrayBuffer );
				output.setUint32( offset, triangles, true ); offset += 4;

				for ( let i = 0, il = objects.length; i < il; i ++ ) {

					let object = objects[ i ];

					let vertices = object.geometry.vertices;
					let faces = object.geometry.faces;
					let matrixWorld = object.matrixWorld;

					normalMatrixWorld.getNormalMatrix( matrixWorld );

					for ( let j = 0, jl = faces.length; j < jl; j ++ ) {

						let face = faces[ j ];

						vector.copy( face.normal ).applyMatrix3( normalMatrixWorld ).normalize();

						output.setFloat32( offset, vector.x, true ); offset += 4; // normal
						output.setFloat32( offset, vector.y, true ); offset += 4;
						output.setFloat32( offset, vector.z, true ); offset += 4;

						let indices = [ face.a, face.b, face.c ];

						for ( let k = 0; k < 3; k ++ ) {

							vector.copy( vertices[ indices[ k ] ] ).applyMatrix4( matrixWorld );

							output.setFloat32( offset, vector.x, true ); offset += 4; // vertices
							output.setFloat32( offset, vector.y, true ); offset += 4;
							output.setFloat32( offset, vector.z, true ); offset += 4;

						}

						output.setUint16( offset, 0, true ); offset += 2; // attribute byte count

					}

				}

				return output;

			} else {

				let output = '';

				output += 'solid exported\n';

				for ( let i = 0, il = objects.length; i < il; i ++ ) {

					let object = objects[ i ];

					let vertices = object.geometry.vertices;
					let faces = object.geometry.faces;
					let matrixWorld = object.matrixWorld;

					normalMatrixWorld.getNormalMatrix( matrixWorld );

					for ( let j = 0, jl = faces.length; j < jl; j ++ ) {

						let face = faces[ j ];

						vector.copy( face.normal ).applyMatrix3( normalMatrixWorld ).normalize();

						output += '\tfacet normal ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';
						output += '\t\touter loop\n';

						let indices = [ face.a, face.b, face.c ];

						for ( let k = 0; k < 3; k ++ ) {

							vector.copy( vertices[ indices[ k ] ] ).applyMatrix4( matrixWorld );

							output += '\t\t\tvertex ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';

						}

						output += '\t\tendloop\n';
						output += '\tendfacet\n';

					}

				}

				output += 'endsolid exported\n';

				return output;

			}

		};

	}() )

};
