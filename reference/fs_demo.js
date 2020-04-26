const fs = require('fs');
const path = require('path');

//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
    if(err) throw err;
    console.log('folder created...')
}) // asynchronous -- takes in a callback. there is also a sync version.
//this is creating the test folder in the reference folder