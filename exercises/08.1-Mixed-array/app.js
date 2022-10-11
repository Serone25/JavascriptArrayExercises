let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
function type(arrX){
    let arr = [];
    let type;
    for(let i = 0; i<= arrX.length-1; i++){
        type = arrX[i];
        arr.push(typeof type);
    }
    for(let x = 0; x <= arr.length-1;x++){
        console.log(arr[x]);
    }
}
type(mix);