const path = require('path')
const http = require('http');
///const routes=require('./routes');
const express = require('express');
const app = express()
//const MongoConnect = require('./utils/database')
const adminRoutes = require('./routers/admin')
const shopRoutes = require('./routers/shop')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error') 
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
const rootDir = require('./utils/path.js')
app.use(express.static(path.join(__dirname,'public')))
app.use(errorController.get404Page )


 //app.listen(3000)
mongoose.connect('mongodb+srv://Barsha:bd0chEIQnyn6lWiZ@cluster0-2xiby.mongodb.net/test?retryWrites=true&w=majority').then((result)=>{
    console.log("connected!!")
    console.log(result)
}).catch(err=>{
    console.log(err)
})
