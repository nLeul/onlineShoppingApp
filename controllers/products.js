const Product = require('../models/product');
const path = require('path');


exports.getProduct = (req, res, next) => {
    res.render('add-product', { title: 'This is products title' });
    // console.log('hi from controller')
};
exports.postProduct = (req, res, next) => {
    // console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    let product = new Product(title, imageUrl, price);
    product.save();
 
    // res.send('Succesful post')
    res.redirect('/');
};
exports.getAllProducts = (req, res, next) => {
    
    console.log(Product.getAll());
    const products = Product.getAll();
    res.render('shop',{prods:products,shopTitle:'This is shop title'});

}