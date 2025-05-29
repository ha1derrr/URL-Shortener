const express = require('express')
const router = express.Router()
const {generateShortUrl,getAnalytics} = require('../controllers/url')
const url = require('../models/url')

router.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;    
    const entry = await url.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:[{
                timeStamp: Date.now()
            }]
        }
    })
    res.redirect(entry.redirectUrl)
})

router.get('/analytics/:shortId',getAnalytics)

router.post('/',generateShortUrl)

module.exports = router