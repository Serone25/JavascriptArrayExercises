let myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let suma = 0;
let promedio = 0;
for (let number of myArray){
	suma = suma + number;
	//console.log(suma);
}
promedio = suma/ myArray.length;
console.log(promedio);
