a=process.argv;
var y=0;
for (var i=2; i<a.length; i++){
    y+=Number(a[i]);
}
console.log(y);