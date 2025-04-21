import fs from "fs"
let baza=JSON.parse(fs.readFileSync("./database/data.json","utf-8"))
function GET(req,res){

}

function PUT(req,res){
      let users = baza;
    let { id } = req.body;
    let updatedUsers = users.map(user =>
        user.id === id ? { ...user, ...req.body } : user
    );
    fs.writeFileSync("./database/data.json", JSON.stringify(updatedUsers, null, 2));
    res.json({ message: "user yangilandi" });
}

function DELETE(req,res){

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