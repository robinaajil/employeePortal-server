//import json server
const jsonServer=require('json-server')
const middleWare = jsonServer.defaults()
const router =jsonServer.router("db.json")
//employee server
const employeeServer = jsonServer.create()
employeeServer.use(middleWare)
employeeServer.use(router)
//port
const PORT = 4000 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})