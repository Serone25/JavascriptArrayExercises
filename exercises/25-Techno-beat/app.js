// Add your code here
function lyricsGenerator(arr){
    const tecno=[];
    const boom=tecno.push('Boom');
    const drop = tecno.push('Drop the Base');
    
    for(let x = 0; x<=arr.length;x++){
        if(arr[x] == 0){
            boom;
        }else{
            drop;

        }
    };
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))