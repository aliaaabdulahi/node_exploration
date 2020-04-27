const http = require('http');
const path = require('path');
const fs  = require('fs');

const server = http.createServer((req, res) => {
  /*  if (req.url === '/'){ //if youre on the index page
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html'}); //status 200, content type text html
          res.end(content); //then display this (itll show an H1 that says home on this page). BUT we don't just want to output HTML here, we want to create a file. So we'll create public folder + files. Now we put content, and it'll output the content of teh file
        })
    }

    if (req.url === '/about'){ //if youre on the about  page
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html'}); //status 200, content type text html
          res.end(content); //then display this (itll show an H1 that says home on this page). BUT we don't just want to output HTML here, we want to create a file. So we'll create public folder + files. Now we put content, and it'll output the content of teh file
        })
    }

    if (req.url === '/api/users'){ //if youre on the index page
       const users = [
           { name: 'Bob Smith', age: 40 },
           { name: 'John Doe', age: 40 }
       ];
       res.writeHead(200, { 'Content-Type': 'application/json'}); //status 200, content type application/json
       res.end(JSON.stringify(users));
    } */

    // just to reiterate: we're checking our URL, if it's '/' (aka the homepage/index page), 
/* we're going to read the file index.html, which is in the public folder and we're gonna 
then check for an error, we're gonna set the status and the content type and we're gonna
simply serve the html
we can also check for the /about page & do the same thing and serve the about page.

If we wanted this to be a REST API, we wouldn't be serving HTML, we'd be serving JSON
So if we change the req.url to /api/users, normally what we do is fetch data from a database
and serve that however im gonna just hard code in it & say users is an array
we want it to be a 200 response, however this is JSON content, so we wouldn't do text/html, 
we would do application/json as the content type
then we need to turn this JS array of objects into JSON
so we'll do res.end(JSON.stringify(users))
if we go to localhost:5000/api/users, we will see the JSON 
so if you were to build some kind of microservice or REST API, you could do this
or prob w express, but this is how we do it with node

This really isn't very efficent, we're gonna stick to serving just HTML files 
However, this isn't efficient bc every page we add, we'd have to do a conditional and serve all the info
We also need to be able to handle CSS, or images, etc.
So this isn't gonna work... so let's comment it out & make it better */


    //We want to make the file path dynamic
    // Build file path
    let filePath = path.join(
        __dirname, //curent directory name
        "public", // public folder
        req.url === "/" ? "index.html" : req.url // we want to set this to the request url, so for instance fi we go to /about.html, then we want it to load about.html, but the root is a little different bc its jsut slash, so we're using a ternary operator, saying if the req.url is just /, we must load the index, otherwise we want req.url
    );
    console.log(filePath) // this will join the directory name with the folder that the views are located in, and join the file....returning the entire path of the file we want rendered

    //We're also gonna want to set the content type...html is text/html, json is application/json, css is text/css...
    // So we're gonna get the extension of file
      let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
  //console.log(req.url); 
    //test to see what the url is. when we go to the local host its running on, itll report the url its getting so if we go to localhost:5000/about, it'll console.log(/about)
});


const PORT = process.env.PORT || 5000; 
// we're gonna put the port inside of an environment variable, 
//however, when we deploy this its not always gonna run on 5000, 
//its gonna run on whatever our host is gonna decide which is gonna be 
//stored in what is called an environment variable. 
//so, it's going to be in process.env.PORT OR 5000.
//its gonna first look for environemnt variable & then if that's not found, 
//its gonna run it on 5000.

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
//here we listen & run the server on the port