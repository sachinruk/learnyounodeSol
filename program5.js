var fs = require('fs');
var path = require('path');

function printFiles(){
    fs.readdir(process.argv[2], function doneChecking(err, list){
        //file_exts=path.extname(list);
        required_ext="."+process.argv[3];
        //console.log(required_ext);
        //console.log(file_exts.length);
        for (var i=0; i<list.length; i++){
            file_exts=path.extname(list[i]);
            
            //console.log(list[i] + " "+ file_exts[i]);  
            if (file_exts==required_ext)
                console.log(list[i]);
        }
    });
};

printFiles();