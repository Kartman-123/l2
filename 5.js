try{const fs = require("fs");
var data= fs.readFileSync("lab2_5.txt", 'utf8')
let arr = data.split('');
let results=[];
let z=1,result;
for(let i=0;i<arr.length-1;i++){
        if((arr[i]==arr[i+1])&!((isNaN(arr[i])||!(arr[i]!=' ')))){
            z++}else{if(z!=1){results.push(z);
z=1;}}}
for(let i=0;i<results.length;i++){
        if (results[i]>results[i+1]){
            results[i+1]=results[i]}}
console.log(results[results.length-1]);
}catch{console.log('error')}