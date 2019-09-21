try{const fs = require("fs");
    var data= fs.readFileSync("lab2_2.java", 'utf8')
    let z=data.replace(/public/g,'private');
    fs.writeFileSync("lab2_2.java",z,'utf8');}
catch{console.log('error')}

   