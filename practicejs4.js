// Write a Product class that stores the name, price, and metadata, 
// where metadata is a hash that stores additional information about the product.
var metadata=[]
class Product {
    constructor(name, price, metadata){
    this.name = name;
    this.price = price;
    this.metadata = metadata;
    }
}

const product = new Product("Smartphone", 499.99, {brand: "Apple", color: "Silver" });


console.log(product);



var hashly= {itch1: "itch", my: "my", bum: "bum"}

console.log(hashly.itch1)


