const fs = require('fs');

const text = 'Привет как дела всё отлично';

//write to file

const pathFile = 'd02/n_1.txt';
fs.writeFileSync(pathFile,text, {encoding: 'utf8', flag: 'a'});

// write file from array

const text2=['один','два','три'];

fs.writeFileSync('./d02/n_2.txt', text2.join('\r\n'),{encoding: 'utf8', flag: 'w'});