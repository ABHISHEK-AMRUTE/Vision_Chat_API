const express = require('express')
const app = new express.Router()
const database = require('../firebase/firebase')

//////////landing page of the chat interface/////
app.get('',(req,res)=>{
    res.render('chat',{
        tit : {
            name : "title of the page",
            body : "I am th ebody of the page"
        }
    })
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

///creating room and password
app.get('/createRoom/')



module.exports = app