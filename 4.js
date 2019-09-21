try{const fs = require("fs");
var str='таракан';
var dat= fs.readFileSync("lab2_1.txt", 'utf8')
console.log(data);
   let arr=data.split(' ');
for(let i=0;i<arr.length;i++){
    if(arr[i]==str){fs.writeFileSync("lab2_4_slovo.txt",arr[i],'utf8');}}} 
catch{console.log(err.massage)}
