module.exports = function( vertexSize, dataLength ) {

	var indexLookUp = {},
		curIndexData = [],
		dataLength = dataLength || 3;

	return function( vertices, indices ) {

		var doIndices = Array.isArray( indices ) && ( Array.isArray( arguments[ 2 ] ) || typeof arguments[ 2 ] == 'number' ),
			vertexData = null,
			curVertex = null,
			lookUpId = null;

		if( doIndices )
			vertexData = Array.isArray( arguments[ 2 ] ) ? arguments[ 2 ] : Array.prototype.slice.call( arguments, 2 );
		else
			vertexData = Array.isArray( arguments[ 1 ] ) ? arguments[ 1 ] : Array.prototype.slice.call( arguments, 1 );

		while( vertexData.length >= vertexSize ) {

			curVertex = vertexData.splice( 0, vertexSize );

			if( doIndices ) {

				lookUpId = curVertex.toString();

				if( indexLookUp[ lookUpId ] === undefined ) {

					indexLookUp[ lookUpId ] = vertices.length;
					vertices.push( curVertex );
				}

				curIndexData.push( indexLookUp[ lookUpId ] );

				if( curIndexData.length == dataLength ) {

					indices.push( curIndexData );

					curIndexData = [];
				}
			} else {

				console.log( 'HERE' );
				vertices.push( curVertex );
			}
		}
	};
};