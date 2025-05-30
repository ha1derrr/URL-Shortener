const express = require('express')
const router = express.Router()
const {generateUser,loginUser} = require('../controllers/user')

router.post('/signup',generateUser)
router.post('/login',loginUser)

module.exports = router