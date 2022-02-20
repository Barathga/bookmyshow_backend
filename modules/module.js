const mongo = require('../connect')
module.exports.homeModule= async(req,res,next)=>{
    res.send("Home")
}
module.exports.addModule= async(req,res,next)=>{
    let data = await mongo.db.collection('user').insertOne(req.body)
    res.send(data)
}