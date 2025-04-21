import fs from "fs"
let baza=JSON.parse(fs.readFileSync("./database/data.json","utf-8"))
function GET(req,res){
      res.send("salom getdan")
}

export default{
      GET
}