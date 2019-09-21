try{const fs = require("fs");
var data= fs.readFileSync("lab2_1.txt", 'utf8')
console.log(data);
    let arrdata=data.split(" ");
  for( let i=0;i<data.split(" ").length-1;i++) {
       if(arrdata[i][arrdata[i].length-1]==arrdata[i+1][0]){
       console.log(arrdata[i])};}} catch{console.log('error')}