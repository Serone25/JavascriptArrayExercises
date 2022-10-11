let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
par.replace(/\S/g, function(p){
    counts[p] =(isNaN(counts[p]) ?1 : counts[p] +1);
});
console.log(counts);