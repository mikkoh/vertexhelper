var helperTriangle = require( '../index' )( 3, 3 ),
	helperLine = require( '../index' )( 3, 2 ),
	helperPoint = require( '../index' )( 2, 1 ),
	helperJustVertex = require( '../index' )( 2 );

var triIdx = [],
	triVert = [],
	lineIdx = [],
	lineVert = [],
	pointIdx = [],
	pointVert = [],
	justVert = [];
	


helperTriangle( triVert, triIdx, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
								 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
								 0.6, 0.7, 0.8, 0.3, 0.4, 0.5, 0.0, 0.1, 0.2 );

helperLine( lineVert, lineIdx, [ 0, 1, 2, 3, 4, 5, 
							   	 2, 2, 2, 3, 4, 5 ] );

helperPoint( pointVert, pointIdx, 1, 2, 3, 4 );

helperJustVertex( justVert, 1, 2, 3, 4 );

console.log( '---TRI DATA---');
console.log( triVert );
console.log( triIdx );
console.log( '--------------\n');

console.log( '---LINE DATA---');
console.log( lineVert );
console.log( lineIdx );
console.log( '---------------\n');


console.log( '---POINT DATA---');
console.log( pointVert );
console.log( pointIdx );
console.log( '----------------\n');

console.log( '---JUST VERT---');
console.log( justVert );
console.log( '---------------\n');