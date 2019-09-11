const http = require('http');
const routes=require('./routes')

// function requestListener(req, res){

// }

// http.createServer(requestListener)
// const server = http.createServer((req, res)=>{
//     //previously all codes used to be here
//     // now all these codes are in routes.js so can be called in another way
// })
const server = http.createServer(routes)
server.listen(3000)