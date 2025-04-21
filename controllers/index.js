import fs from "fs"
let baza=JSON.parse(fs.readFileSync("./database/data.json","utf-8"))
function GET(req,res){

}

function PUT(req,res){

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