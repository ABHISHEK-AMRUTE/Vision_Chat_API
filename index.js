const express = require('express')
const main_routes = require('./src/routes/main_routes')
const app =  express()

const port = process.env.PORT || 3000
app.use(express.json())
app.use(main_routes)


app.listen(port,()=>{
    console.log('Server is up on port: '+port)
})