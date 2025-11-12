// import json-server (commonjs type aayond require aahn import cheyyan use cheyyunne)
const jsonserver = require('json-server')

// create server app using json-server
const server = jsonserver.create()
// 
const middleware = jsonserver.defaults()
const routes = jsonserver.router('db.json')

server.use(middleware)
server.use(routes)

const PORT = 3000
// listen is used to start your server to view output in browser
server.listen(PORT,()=>{
    console.log("Server Started");
    
})