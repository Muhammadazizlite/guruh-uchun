import express from "express"
import router from "./routers/index.js"
const server=express()
const PORT=5000
server.use(express.json)
server.use(router)

server.listen(PORT,()=>console.log("Server "+PORT+" da ishlamoqda"))
