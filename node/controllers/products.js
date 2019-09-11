const path = require('path')
const rootDir = require('../utils/path.js')
const Product = require('../models/products')
exports.getAddProduct = (req,res,next)=>{
    /// ../ can be replaced by making separate parent directory i.e. utils/path.js
    res.sendFile(path.join(rootDir,'resources','views','add-product.html'))
   // res.sendFile(path.join(__dirname,'../','resources','views','add-product.html'))
    //res.send('<form action="/"method="POST"> <input type="text" name="title"><button type="submit">Hello admin</button></form>')
}

exports.postAddProduct = (req, res, next) => {
   const product = new Product(req.body.title)// name="title" in add-products.html
   product.save()
    res.redirect('/')
}

exports.getProducts = (req,res,next) => {
    const product = Product.fetchAll
    console.log('shop.js', product)
    res.sendFile(path.join(__dirname,'../','resources','views','shop.html'))
 
}
