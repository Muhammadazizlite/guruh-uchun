import fs from "fs"
let baza=JSON.parse(fs.readFileSync("./database/data.json","utf-8"))
function GET(req,res){
      const par=req.params
      try{
            if(par){
                  throw Error("Invalid id")
            }
            if(!baza.some(book=>book.id==par)){
                  throw Error("Id not found")
            }
            res.status(200)
            res.send(JSON.stringify(baza.filter(book=>book.id==par)[0]))
      }
      catch(error){
            res.status(400)
            res.send(error.message)
      }
}

function PUT(req,res){

}

function DELETE(req,res){
      const par=req.params
      try{
            if(par){
                  throw Error("Invalid id")
            }
            if(!baza.some(book=>book.id==par)){
                  throw Error("Id not found")
            }
            res.status(200)
            res.send(JSON.stringify(baza.filter(book=>book.id==par)[0]))
            fs.writeFileSync("./database/data.json",JSON.stringify(data.filter(book=>book.id!=par)))
      }
      catch(error){
            res.status(400)
            res.send(error.message)
      }
}
function POST(req,res){

}

export default{
      GET,
      POST,
      DELETE,
      PUT
}