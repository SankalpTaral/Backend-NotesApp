
const express = require('express');
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')
require('dotenv').config();


const app = express();


connectToDB();  // you call the function here production rules  

app.use(express.json())


app.get('/notes', async(req,res)=>{

    const notes = await noteModel.find();
    res.json({
        message: "Notes fetch success fully",
        notes
    })

});

app.get('/notes/:id',async (req,res)=>{
    const noteId = req.params.id
    // internally it resolves _id clean
    const note = await noteModel.findById(noteId);
    res.json({
        note
    })

})



app.post('/notes',async (req,res)=>{
    const {title , content } = req.body

     await noteModel.create({   // ✅ await now works
        title,
        content
    });
    
    res.json({
        "message" : "Data posted Succesfully on the Database "
    })
})
app.delete('/notes/:id',async (req,res)=>{
    const noteId = req.params.id;
    
    await noteModel.findOneAndDelete({
          _id : noteId
    })

    res.json({
        message  : "Note Deleted Succesfully"
    })
  
    
})


// Put replaces an entire resource with that id 
app.put('/notes/:id',async (req,res)=>{
    const {title , content } = req.body
    const noteId = req.params.id
    const result = await noteModel.replaceOne(
        {_id : noteId},
        {title, content}
    )

    res.json({
        message : "Data Fully Replaced  for the requested id ",
            result
    })

})

app.patch('/notes/:id',async(req,res)=>{
    const noteId = req.params.id;

    const {content}  = req.body; // only sent fields wil get updated
    const updatedNote = await noteModel.findByIdAndUpdate(
        noteId,
        // content
        req.body // it expects an object not a string 
    )

    res.json({
        message : "Updated the Data  Succesfully "
    })
    
})
app.listen("8000",()=>{
    console.log("Server Listening on port 8000")
})
