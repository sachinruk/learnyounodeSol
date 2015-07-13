var my_module = require('my_module');

function print(err, data){
    if (err)
        console.log('Error', err);
    else
        for (var i=0; i<data.length; i++)
            console.log(data[i]);
}

my_module(process.argv[2],process.argv[3],print);