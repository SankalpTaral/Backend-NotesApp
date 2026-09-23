const mongoose = require('mongoose')

/**
 * title and content 
 * title -> String , content -> String
 */
const noteSchema  = new mongoose.Schema(
    {
        title:String,
        content:String
    }
)


const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel;

/**
 * collection : group of similar data
 * const noteModel = mongoose.model("note",noteSchema) 
 * note : collection name ur telling grouping
 * noteSchema is second argument
 * Model helps to perform crud operations easily
  Form Example
 * using model easy review to manager 
 * else hard messy review
 */