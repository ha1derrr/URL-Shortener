const User = require('../models/user')
const {v4:uuidV4} = require('uuid')
const {setUser} = require('../services/auth')

async function generateUser(req,res){
    const {name,email,password} = req.body
    if(!name | !email || !password){
        return res.send(`Some fields are missing`)
    }
        await User.create({
            // The left side properties are in backend
            // The right side properties comes from frontend
            // Both should match
            name,
            email,
            password
        })
        return res.redirect('/')
    }

async function loginUser(req,res){
    const {email,password} = req.body
    const user = await User.findOne({email,password})
    if(!user){
        return res.render('login',{
            "error":"User Doesn't Exist"
        })
    }
    else{
    const sessionId = uuidV4()
    setUser(sessionId,user)
    // The uid sent as response will return the same in req too.
    res.cookie("uid",sessionId)
    return res.redirect('/')
}
}

module.exports = {generateUser, loginUser}