try{const fs = require("fs");
    var data= fs.readFileSync("lab2_3.txt", 'utf8')
    let arr=data.split('\n');
    let z;
for(let i=0;i<arr.length;i++){
    z=z+'\n';
    for(let j=0;j<arr.length;j++)z=z+arr[j][i];}
console.log(z);}
catch{console.log('error')}


   