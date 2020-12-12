
//for first
var grid = [];

for( var i = 0; i < 3; i++) {
    grid.push( []);  
    for( var j = 0; j < 3; j++){
        grid[i].push( 0);
    }
}
console.log(grid);

//for second
var grid = [];

for( var i = 0; i < 3; i++) {
    grid.push( []);  
    for( var j = 0; j < 3; j++){
        grid[i].push( i);
    }
}
console.log(grid);

//for third
var grid = [];

for( var i = 0; i < 3; i++) {
    grid.push( []);  
    for( var j = 0; j < 3; j++){
        grid[i].push( j);
    }
}
console.log(grid);

// for fourth
var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

for( var i = 0; i < grid.length; i++) {

    for( var j = 0; j < 3; j++){
        grid[i][j] = "x";
    }
}
console.log(grid);   