let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

function mergeTwoList(arr){
    let odd = [];
    let even = [];
    for(let x = 0; x <=arr.length -1; x++){
        if(arr[x]%2 == 0){
            even.push(arr[x]);
        }else{
            odd.push(arr[x]);
        }
    }
    let total=odd.concat(even);
    return total;
}
console.log(mergeTwoList(list_of_numbers));