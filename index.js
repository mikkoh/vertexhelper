module.exports = function( vertexSize, dataLength ) {

	var indexLookUp = {},
		curIndexData = [],
		dataLength = dataLength || 3;

	return function( vertices, indices ) {

		var vertexData = Array.isArray( arguments[ 2 ] ) ? arguments[ 2 ] : Array.prototype.slice.call( arguments, 2 ),
			curVertex = null,
			lookUpId = null;

		while( vertexData.length >= vertexSize ) {

			curVertex = vertexData.splice( 0, vertexSize );

			if( indices ) {

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

				vertices.push( curVertex );
			}
		}
	};
};