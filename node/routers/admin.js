const path = require('path')

const express = require('express');
const router = express.Router();
//const rootDir = require('../utils/path.js')

const productController = require('../controllers/products') 

router.get('/add-product',productController.getAddProduct)

// handle only from post request
router.post('/add-product',productController.postAddProduct)

module.exports = router
//exports.routes = router
