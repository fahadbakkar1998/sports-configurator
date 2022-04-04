/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.TypedGeometryExporter = function () {};

THREE.TypedGeometryExporter.prototype = {

	constructor: THREE.TypedGeometryExporter,

	parse: function ( geometry ) {

		let output = {
			metadata: {
				version: 4.0,
				type: 'TypedGeometry',
				generator: 'TypedGeometryExporter'
			}
		};

		let attributes = [ 'vertices', 'normals', 'uvs' ];

		for ( let key in attributes ) {

			let attribute = attributes[ key ];

			let typedArray = geometry[ attribute ];
			let array = [];

			for ( let i = 0, l = typedArray.length; i < l; i ++ ) {

				array[ i ] = typedArray[ i ];

			}

			output[ attribute ] = array;

		}

		let boundingSphere = geometry.boundingSphere;

		if ( boundingSphere !== null ) {

			output.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return output;

	}

};
