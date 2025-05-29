const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timeStamp : { type:Number }}],

},{timestamps:true})

const url = mongoose.model("url", userSchema)

module.exports = url