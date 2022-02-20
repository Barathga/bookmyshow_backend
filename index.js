const express = require('express')
const mongo = require('./connect')
const {addModule} = require('./modules/module')
const app = express()
const cors = require("cors")
app.use(cors)
app.use(express.json())

mongo.connect()

app.post('/add',addModule)

app.listen(8000,()=>{
    console.log("Server Started : 8000");
})