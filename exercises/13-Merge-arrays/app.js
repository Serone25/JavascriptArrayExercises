let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for(let x = 0; x <= chunk_one.length - 1; x++){
        newArray.push(chunk_one[x]);
    }
    for(let y = 0; y <= chunk_two.length - 1; y++){
        newArray.push(chunk_two[y]);
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));