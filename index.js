const express = require('express')
const main_routes = require('./src/routes/main_routes')
const app =  express()
const database = require('./src/firebase/firebase')
const path  =require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000
app.use(express.json())
app.use(main_routes)
var pathdirectory= path.join(__dirname,'./public')
app.use(express.static(pathdirectory))
app.set('view engine','hbs')
var  viewpath =path.join(__dirname,'./templets/views')
app.set('views',viewpath)


console.log(encodeURIComponent('abhishke amrute'))
app.listen(port,()=>{
    console.log('Server is up on port: '+port)
})