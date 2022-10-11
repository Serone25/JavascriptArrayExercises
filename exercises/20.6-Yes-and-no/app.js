let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
myFunction = function(number){
    if(number == 1){
        return ("wiki");
    }else{
        return("woko");
    }
}
const myArray2 = theBools.map(myFunction);
console.log(myArray2);