/*
 * @author takahiro / http://github.com/takahirox
 *
 * Dependencies
 *  - mmd-parser https://github.com/takahirox/mmd-parser
 */

THREE.MMDExporter = function () {

	// Unicode to Shift_JIS table
	let u2sTable;

	function unicodeToShiftjis( str ) {

		if ( u2sTable === undefined ) {

			let encoder = new MMDParser.CharsetEncoder();
			let table = encoder.s2uTable;
			u2sTable = {};

			let keys = Object.keys( table );

			for ( let i = 0, il = keys.length; i < il; i ++ ) {

				let key = keys[ i ];

				let value = table[ key ];
				key = parseInt( key );

				u2sTable[ value ] = key;

			}

		}

		let array = [];

		for ( let i = 0, il = str.length; i < il; i ++ ) {

			let code = str.charCodeAt( i );

			let value = u2sTable[ code ];

			if ( value === undefined ) {

				throw 'cannot convert charcode 0x' + code.toString( 16 );

			} else if ( value > 0xff ) {

				array.push( ( value >> 8 ) & 0xff );
				array.push( value & 0xff );

			} else {

				array.push( value & 0xff );

			}

		}

		return new Uint8Array( array );

	}

	function getBindBones( skin ) {

		// any more efficient ways?
		let poseSkin = skin.clone();
		poseSkin.pose();
		return poseSkin.skeleton.bones;

	}

	/* TODO: implement
	// mesh -> pmd
	this.parsePmd = function ( object ) {

	};
	*/

	/* TODO: implement
	// mesh -> pmx
	this.parsePmx = function ( object ) {

	};
	*/

	/*
	 * skeleton -> vpd
	 * Returns Shift_JIS encoded Uint8Array. Otherwise return strings.
	 */
	this.parseVpd = function ( skin, outputShiftJis, useOriginalBones ) {

		if ( skin.isSkinnedMesh !== true ) {

			console.warn( 'THREE.MMDExporter: parseVpd() requires SkinnedMesh instance.' );
			return null;

		}

		function toStringsFromNumber( num ) {

			if ( Math.abs( num ) < 1e-6 ) num = 0;

			let a = num.toString();

			if ( a.indexOf( '.' ) === - 1 ) {

				a += '.';

			}

			a += '000000';

			let index = a.indexOf( '.' );

			let d = a.slice( 0, index );
			let p = a.slice( index + 1, index + 7 );

			return d + '.' + p;

		}

		function toStringsFromArray( array ) {

			let a = [];

			for ( let i = 0, il = array.length; i < il; i ++ ) {

				a.push( toStringsFromNumber( array[ i ] ) );

			}

			return a.join( ',' );

		}

		skin.updateMatrixWorld( true );

		let bones = skin.skeleton.bones;
		let bones2 = getBindBones( skin );

		let position = new THREE.Vector3();
		let quaternion = new THREE.Quaternion();
		let quaternion2 = new THREE.Quaternion();
		let matrix = new THREE.Matrix4();

		let array = [];
		array.push( 'Vocaloid Pose Data file' );
		array.push( '' );
		array.push( ( skin.name !== '' ? skin.name.replace( /\s/g, '_' ) : 'skin' ) + '.osm;' );
		array.push( bones.length + ';' );
		array.push( '' );

		for ( let i = 0, il = bones.length; i < il; i ++ ) {

			let bone = bones[ i ];
			let bone2 = bones2[ i ];

			/*
			 * use the bone matrix saved before solving IK.
			 * see CCDIKSolver for the detail.
			 */
			if ( useOriginalBones === true &&
				bone.userData.ik !== undefined &&
				bone.userData.ik.originalMatrix !== undefined ) {

				matrix.fromArray( bone.userData.ik.originalMatrix );

			} else {

				matrix.copy( bone.matrix );

			}

			position.setFromMatrixPosition( matrix );
			quaternion.setFromRotationMatrix( matrix );

			let pArray = position.sub( bone2.position ).toArray();
			let qArray = quaternion2.copy( bone2.quaternion ).conjugate().multiply( quaternion ).toArray();

			// right to left
			pArray[ 2 ] = - pArray[ 2 ];
			qArray[ 0 ] = - qArray[ 0 ];
			qArray[ 1 ] = - qArray[ 1 ];

			array.push( 'Bone' + i + '{' + bone.name );
			array.push( '  ' + toStringsFromArray( pArray ) + ';' );
			array.push( '  ' + toStringsFromArray( qArray ) + ';' );
			array.push( '}' );
			array.push( '' );

		}

		array.push( '' );

		let lines = array.join( '\n' );

		return ( outputShiftJis === true ) ? unicodeToShiftjis( lines ) : lines;

	};

	/* TODO: implement
	// animation + skeleton -> vmd
	this.parseVmd = function ( object ) {

	};
	*/

};
