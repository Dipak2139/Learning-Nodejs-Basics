// // const http = require('node:http');
// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World<h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// if we want to export mymodules.js than we will write

// import {a,b,d} from "./mymodules.js"
// console.log(a,b,d)

// how we can export default export
// import obj from "./mymodules.js"
// console.log(obj)
//default export can be exported in any name for example
// import deepu from "./mymodules.js"
// console.log(deepu)

//now exporting using require functions
const a = require("./mymodule2.js")
console.log(a);