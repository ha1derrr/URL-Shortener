const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[{timeStamp : { type:Number }}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{timestamps:true})

const url = mongoose.model("url", userSchema)

module.exports = url