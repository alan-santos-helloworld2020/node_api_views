const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const router_views = require('./router/views/router')
const router_api = require('./router/api/router')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(router_views)
app.use(router_api)

app.listen(port,err =>{
    if (err) {

        console.error(err)
        
    } else {
        
        console.log('http://localhost:'+port)
    }
})

module.exports = app;