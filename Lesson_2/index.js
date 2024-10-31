//подключаем модуль для работы с файловой системой
const fs = require('fs');
const path = require('path');

//проверяем существоание папки

function f01() {
    const pathToDir = './test';

    if (fs.existsSync(pathToDir)) {
        console.log('yes');
    } else {
        console.log('no');
    }

}

//f01();

//проверка существования файла

function f02() {
    const pathToDir = './test/mus_.mp3';

    if (fs.existsSync(pathToDir)) {
        console.log('yes');
    } else {
        console.log('no');
    }

}

//f02();

//вычисление размера файла

function f03() {
    const pathToDir = './test/mus.mp3';
    
    if (fs.existsSync(pathToDir)) {
        console.log('yes');
        const fileInfo = fs.statSync(pathToDir);
        console.log(fileInfo.size/1000+'kb');


    } else {
        console.log('no');
    }

}

//f03();

//имя и расширение файла

function f04() {
    const pathToFile = './test/mus.mp3';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.extname(pathToFile));
    console.log(path.parse(pathToFile));

}

//f04();

//получаем файлы и папки в директории

function f05() {
    const pathToDir = '.';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles);
    let out='';
    allFiles.forEach(item => out += item +'\n');
    console.log(out);

}

//f05();

//получит ьабсолютный пусть

const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
console.log(__dirname);