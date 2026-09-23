
const mongoose = require("mongoose");




// How Server will be connected in database thay logic you will write in src > db > db.js

function connectToDB(){

     mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to Db");
        })
}

module.exports =  connectToDB

/*
* You create a file called as db.js in db folder
* purpose of this file is to connect my express server to the database which is on cloud
* install mongoose package and require it in code it provides a mongoose.connect method
* mongoose.connect (url db credstring) this function returns a promise okay so on internet goes to cloud db server
* and connects it 
* so i use .then(()=>{}) it may take time to connect  depending upon internet speed so whenever connected to get to know
* i log "Connected to Db" : meaning my server is now succesfully connected to remote database which is on aws cloud mumbai
* and this everything i wrap in function i name it as connectToDb
* i export this function 
* and i call the function in server.js (Because production rule says call it in server.js not here)
* Why wrapping it in a function because if not wrapped it will be called here directly so i need to call it in server.js
* so i wrap it in function so it does not getted called here so i export and call that function in server.js
* 
* security tip : anycase ur db compromises then just edit the password
 */