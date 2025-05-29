const express = require('express')
const dotenv = require('dotenv')
const connectToDB = require('./connection')
const router = require('./routes/url')
const ejs = require('ejs')
const path = require('path')
const staticRoute = require('./routes/staticRouter')

const app = express()
dotenv.config()
const PORT = process.env.PORT | 3000
connectToDB("mongodb://127.0.0.1:27017/myFirstMongoDB")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views", path.resolve("./views"))
app.use('/',staticRoute)
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})