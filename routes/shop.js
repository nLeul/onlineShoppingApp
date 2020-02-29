const express = require('express');
const path = require('path');
const productController=require('../controllers/products')

const router = express.Router();

router.get('/',productController.getAllProducts); //for the shop
  
module.exports = router;