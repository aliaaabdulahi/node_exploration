const url = require('url');


const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain)
console.log(myUrl.host);

// hostname (does not get port)
console.log(myUrl.hostname); // returns

// pathname
console.log(myUrl.pathname); //returns just the file name in the url

// serialized query
console.log(myUrl.search); //returns just the query params part of url, everything after question mark?

// params object
console.log(myUrl.searchParams); // returns object of search paramaters as key value pairs

// add param
myUrl.searchParams.append('abc', '123'); //adds the abc:123 param key/value pair
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`)); //this will return each param name:value pairs