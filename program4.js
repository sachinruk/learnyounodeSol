var fs = require('fs');
var lines= undefined;

function countLines(doStuff){
    fs.readFile(process.argv[2],function doneReading2(err,content){
        lines=content.toString().split('\n').length-1;
        doStuff();
    });
};

function printLines(){
    console.log(lines);
};

countLines(printLines);