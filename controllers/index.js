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

}


export default{
      GET,
      POST,
      DELETE,
      PUT
}