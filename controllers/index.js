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
      let body = req.body;    
      let UserExists = users.find(el => el.id == body.id);
      if (UserExists) {
          return res.status(400).json({
              status: 400,
              message: 'This User Already Exists'
          });
      }
  
      users.push(body);
      fs.writeFileSync('./database/data.json', JSON.stringify(users, null, 2), 'utf-8');
      return res.status(201).json({
          status: 201,
          message: 'User successfully added',
          data: body
      });
}

export default{
      GET,
      POST,
      DELETE,
      PUT
}