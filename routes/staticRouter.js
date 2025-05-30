const express = require('express')
const staticRouter = express.Router()
const url = require('../models/url')

staticRouter.get('/',async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const allURLs = await url.find({createdBy:req.user._id})
    return res.render('home',{
        urls:allURLs
    })
})  

staticRouter.get('/signup',(req,res)=>{
    return res.render('signup')
})
staticRouter.get('/login',(req,res)=>{
    return res.render('login')
})

module.exports = staticRouter
