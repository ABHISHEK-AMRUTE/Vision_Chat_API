const express = require('express')
const main_routes = require('./src/routes/main_routes')
const app =  express()
const keys = require('./keys')

var firebaseConfig = {
    apiKey: keys.firebase,
    authDomain: "vision-chat-api.firebaseapp.com",
    databaseURL: "https://vision-chat-api.firebaseio.com",
    projectId: "vision-chat-api",
    storageBucket: "vision-chat-api.appspot.com",
    messagingSenderId: "597352145530",
    appId: "1:597352145530:web:8ee6099df47160593551c3",
    measurementId: "G-Y3246H3C18"
  };


const port = process.env.PORT || 3000
app.use(express.json())
app.use(main_routes)


app.listen(port,()=>{
    console.log('Server is up on port: '+port)
})