const path =require("path"); 
console.log(path.basename(__filename)); 
console.log(path.dirname(__filename)); 
console.log(path.extname(__filename)); 
console.log(path.parse(__filename)); 
 
const fs = require("fs"); 
const myFile = path.join(__dirname, "tp", "1.txt"); 
fs.mkdir(path.join(__dirname, "tp"), function (err) { 
    if (err) console.log(err); 
}) 
fs.writeFile(myFile, "Привет студенты:\n", function (err) { 
    if (err) console.log(err); 
});
fs.appendFile(myFile, "Пока студенты!", function (err){
    if (err) console.log(err)
});
fs.readFile(myFile, 'utf-8', function (err){
    if (err) console.log(err)
    (console.log(content))
});
