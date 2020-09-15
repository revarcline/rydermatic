const fs = require('fs');

let namedata = fs.readFileSync('names.json');
let names = JSON.parse(namedata);

console.log(names);
