const express = require('express')
const anotherRouter = express.Router()
const url = require('../models/url')

anotherRouter.get('/',async(req,res)=>{
    const allURLs = await url.find({})
    return res.render('home',{
        urls:allURLs
    })
})

module.exports = anotherRouter
