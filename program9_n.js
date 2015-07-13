var http = require('http')
var bl = require('bl')

var urls=process.argv.slice(2);
var results = new Array(urls.length);
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(urls[index], function (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == urls.length) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)