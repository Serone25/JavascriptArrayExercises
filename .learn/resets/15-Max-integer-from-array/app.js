let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function biggest(arr){
    let aux = 0;
    for(let x = 0; x <= arr.length;x++){
        
        if(arr[x] > aux){
            aux = arr[x];
        }
    }
    console.log(aux);
}

biggest(myArray);