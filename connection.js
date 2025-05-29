const mongoose = require('mongoose')

function connectToDB(databaseURL){mongoose
.connect(databaseURL)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log("Database Connection Error ", error)
})
}
module.exports = connectToDB