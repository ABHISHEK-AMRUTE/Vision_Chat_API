const express = require('express')
const app = new express.Router()
const database = require('../firebase/firebase')

app.get('/user',(req,res)=>
{
    res.send("form app congrats!")
})


//////chatting: pushing chat over server
app.get('/chat/:usrname/:message',(req,res)=>
{   
    
    database.ref('/user/'+Date.now()).set({"namam":"hi there"})
    res.send("form app congrats!")
})


///get all chats: 
app.get('/chat/',(req,res)=>
{
    res.send("form app congrats!")
})
module.exports = app