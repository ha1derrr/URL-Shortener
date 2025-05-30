const express = require('express')
const router = express.Router()
const {generateShortUrl,getAnalytics} = require('../controllers/url')
const url = require('../models/url')

// router.get('/',(req,res)=>{
//     const allURLs = url.find({})
//     res.render('home',{
//         urls:allURLs
//     })
// })

router.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;    
    const entry = await url.findOneAndUpdate({shortId},
        {
        $push:{
            visitHistory:[{
                timeStamp: Date.now()
            }]
        }
    })
    if(!entry){
        return res.render('home')
    }
    res.redirect(entry.redirectUrl)
})

router.get('/analytics/:shortId',getAnalytics)

router.post('/url',generateShortUrl)

module.exports = router