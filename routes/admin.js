const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productController = require('../controllers/products');

const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/add-product', productController.getProduct);

router.post('/add-product',productController.postProduct);

module.exports = router;