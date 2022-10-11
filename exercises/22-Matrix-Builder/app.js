// Code goes here
function matrixBuilder(entero){
    let miMatrix=[];
    for(var x = entero; x <= miMatrix.length-1, x--;){
        miMatrix.push([]);
    }
    for(var y = entero; y <= miMatrix.length-1, y--;){
        miMatrix[y].push(Math.round((Math.random() * 1)))
        for(var z = entero; z <= miMatrix.length-1, z--;){
            miMatrix[z].push(Math.round((Math.random() * 1)))
        }
    }
    return miMatrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))