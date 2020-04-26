const path = require('path');

// Base file name
console.log(__filename); // returns the entire file name
console.log(path.basename(__filename)); //returns path_demo.js

// Directory name
console.log(__dirname); //returns directory name
console.log(path.dirname(__filename)); //same thing but using path module to get the directory name

// File extension
console.log(path.extname(__filename)); //returns .js

// Create path object
console.log(path.parse(__filename)); //root, dir, base, ex, name
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));