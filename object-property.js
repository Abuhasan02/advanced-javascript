const students = [
  { age: 21, name: "Hasan" },
  { age: 23, name: "Farhad" },
  { age: 45, name: "jonis" },
  { age: 23, name: "korim" },
  { age: 35, name: "jomir" },
  { age: 41, name: "somir" },
];
// const result = [];
// for(let i=0;i<students.length;i++){
//     // for(let j = 0;j<i.length;j++){
//         const std = students[i];
//         // const stdName = std.name;
//         result.push(std.name);
        
// }
// console.log(result); 

// const name = students.map(s => s.name);
const stdName = students.filter(s => s.age > 30);
console.log(stdName); 