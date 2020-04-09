const express = require('express')
const app = new express.Router()


app.get('/user',(req,res)=>
{
    res.send("form app congrats!")
})


module.exports = app