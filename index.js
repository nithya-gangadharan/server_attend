// import json server

const jsonServer=require('json-server')
// create server  for running json file
const server=jsonServer.create()
// set up route or path for json file
const router=jsonServer.router('db.json')

// create midleware

const middleware=jsonServer.defaults()

server.use(middleware)
server.use(router)
// create server port no
const PORT=3000

server.listen(PORT,()=>{
    console.log(`server running at${PORT}`);
    
})