vertexhelper
============

This is a utility to create vertex and index data.

The data created by vertexhelper can be nicely used with [gl-mesh](https://www.npmjs.org/package/gl-mesh)

Usage
-----
[![vertexhelper](https://nodei.co/npm/vertexhelper.png)](https://nodei.co/npm/vertexhelper)



First begin by "building" a function which will be used to build vertex and index data:

#### `builder = require( 'vertexhelper' )( vertexSize, dataLength )` ####

The above will return a function which can be used to create arrays of vertex data and index data.

`vertexSize`: This is how many values a vertex will contain. For instance if your vertex contains the following
`[x, y, z]` then vertexSize should be 3. If your vertex data contains [x, y, z, u, v] then vertexSize should be 5.

`dataLength`: Is how many vertices are used to render an item. For instance when rendering triangles pass in 3,
rendering lines pass in 2, and if rendering points pass in 1.



With the returned function:
#### `builder( outVertex, [ outIndex ], vertexData )` #### 
or
#### `builder( outVertex, [ outIndex ], vData1, vData2, ... )` ####

Once you've built the vertex builder function you can call it using the above formats.

`outVertex`: This is an array where vertices will be written.

`outIndex`: This array is optional. If an array is passed in then indices will be saved into the array.

The next parameters passed in are vertex data.

`vertexData`: You can pass in an array of vertex data.

or

`vData1, vData2, ...`: Numbers which are the vertex data you'd like to add in.



#### Example:
```javascript
var helperTriangle = require( 'vertexhelper' )( 3, 3 ),
	helperLine = require( 'vertexhelper' )( 3, 2 ),
	helperPoint = require( 'vertexhelper' )( 2, 1 );

var triIdx = [],
	triVert = [],
	lineIdx = [],
	lineVert = [],
	pointIdx = [],
	pointVert = [];
	


helperTriangle( triVert, triIdx, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
								 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
								 0.6, 0.7, 0.8, 0.3, 0.4, 0.5, 0.0, 0.1, 0.2 );

helperLine( lineVert, lineIdx, [ 0, 1, 2, 3, 4, 5, 
							   	 2, 2, 2, 3, 4, 5 ] );

helperPoint( pointVert, pointIdx, 1, 2, 3, 4 );
```