const express = require('express')
const app = new express.Router()
const database = require('../firebase/firebase')
const path = require('path')
//////////landing page of the chat interface/////
app.get('',(req,res)=>{
    res.render('room_creation',{
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




///creating room 
app.get('/createRoom/:userId',(req,res)=>{
    const userId  = req.params.userId;
    console.log(userId)
    database.ref('/'+userId+"/"+Date.now()).set({username:"admin",message:"room created"})
    const url = process.env.URL + '/user_reg?roomID='+userId
    console.log(url)
    res.send({url})
})


//// loading 
app.get('/user_reg',(req,res)=>{
    console.log(req.query.roomID)
    res.render('user_reg',{userID:req.query.roomID})
})



app.get('/chat.hbs',(req,res)=>{
    
    res.render('chat',{userID:req.query.userID,username:req.query.username})
})
module.exports = app