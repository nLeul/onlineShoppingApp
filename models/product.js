const products = [];
class Product {
    constructor(title,imageUrl,price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    save() {
        products.push(this);
        // console.log(products);
    }
    static getAll() {
        return products;
    }
    static findById(prodId) {
        return products.find(p => {p.id===prodId})
    }
}
module.exports = Product;