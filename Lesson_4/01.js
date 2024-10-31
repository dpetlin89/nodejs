const fs = require('fs');

//read json file

const data = fs.readFileSync('./d_05/j_1.json');
console.log(data);
console.log(typeof data);
let dataObj = JSON.parse(data);
console.log(dataObj);

