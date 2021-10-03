let numbers = [2,4,5,6,7,8];
// let result = [];
// for(let i=0;i<numbers.length;i++){
//     let element = numbers[i];
//     let output = element * element;
//     result.push(output);
// }
// Method 1
// const result = numbers.map(function(element){
//     return element * element;

// })

//Method 2
// const result = numbers.map(x=> x * x);

//Filter
const result = numbers.filter(c => c>3);
console.log(result);
