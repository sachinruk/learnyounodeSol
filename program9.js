var bl = require('bl');
var http = require('http');
var urls=process.argv.slice(2);

var dataBuffer=[];
var numGets=0;

function printResults(){
    for (i=0; i<urls.length; i++){
        console.log(dataBuffer[i]);
    }
}

function getHttp(i){ 
        http.get(urls[i],function(response){
            response.setEncoding("utf8");
            response.pipe(bl(function (err, data) {
                if (err)
                    return console.log(err);
                dataBuffer[i]=data.toString();
                numGets++;
                if (numGets==urls.length)
                    printResults();
            }));
        });
}



for (i=0; i<urls.length; i++){   
    getHttp(i);
}