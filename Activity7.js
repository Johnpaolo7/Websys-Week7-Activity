//Part 1: Data Types

//Create variables
var productName = "T-Shirt";
var productId = Symbol("UniqueId");
var price = 25.99;
var isOnSale = true;
var quantity = 50;

//Data type identification
console.log(typeof productName)
console.log(typeof productId)
console.log(typeof price)
console.log(typeof isOnSale);
console.log(typeof quantity);

//Inventory array
let product1 = {
    productName: "T-Shirt", 
    productId: Symbol("UniqueId#T3131"), 
    price: 25.99, 
    isOnSale: true, 
    quantity: 36
};
let product2 = {
    productName: "Polo Shirt", 
    productId: Symbol("UniqueId#yS421"), 
    price: 48.25, 
    isOnSale: true, 
    quantity: 24
};
let product3 ={
    productName: "Pants", 
    productId: Symbol("UniqueId#P4221"), 
    price: 47.78, 
    isOnSale: true, 
    quantity: 18
};
let inventory = [product1, product2, product3];


var line1 = "---------------------------------------------------"; 
console.log(line1);
//Part 2: Immutability with
//Freezing a product
Object.freeze(product1);

//Modification
product1.price = 30;
console.log(product1.price);
product1.discount = 20;
console.log(product1.discount);
delete product1.quantity;
console.log(product1.quantity);

//Nested Objects
product2.details = {
        color: "white",
        size: "Small"
};
//Freezing nested objects
Object.freeze(product2);
//Trying to modify
product2.details.color = "black";
console.log(product2.details.color); 

//Explanation
var explain = "Pwede parin siyang baguhin kasi yung product2 lang yung na freeze at hindi yung nested objects.";
console.log(explain);

//Deep freeze
function deepFreeze(obj) {
    Object.freeze(obj);
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    }
}
deepFreeze(product2);

product2.details.color = "red";
console.log(product2.details.color);


var line2 = "---------------------------------------------------"; 
console.log(line2);
//Part 3: Restricted Modifications with
//Sealing a product
Object.seal(product3);
//Attempted modifications
product3.price = 100;
console.log(product3.price);
product3.description = "Baggy Pants";
console.log(product3.description);
delete product3.quantity;
console.log(product3.quantity);

//Comparison
var comparison = "Sa Object.freeze() nilo-lock niya yung buong object para hindi ma modify habang yung Object.seal() ay pwede parin siyang ma modify pero hindi pwede magdagdag at magdelete.";
console.log(comparison);


var line3 = "---------------------------------------------------"; 
console.log(line3);
//Part 4: Variable Assignment and Mutability
//Primitive Number
let num1 = 1;
let num2 = 2.3;
let num3 = -3;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

console.log(4 / 0);
console.log(-5 / 0);
console.log("Hi!" * 6);

//Non-primitive Array
let phone = ["Apple", "Samsung", "Oppo", "Huawei"];
console.log(phone[1]);
console.log(typeof phone);

//Assignment
let num4 = num2;
num4 = 50;

console.log(num2);
console.log(num4);

//Reference
let company = phone;
company[2] = "Xiaomi";

console.log(phone);
console.log(company);


var line4 = "---------------------------------------------------"; 
console.log(line4);
//Part 5: Best Practices
//Choosing the Right Method
var method1 = "Const to prevent reassignment ng variable.";
var method2 = "Object.freeze() to prevent changes sa object.";
var method3 = "Object.seal() to prevent adding and deleting sa object pero pwede kang mag modify.";

console.log(method1);
console.log(method2);
console.log(method3);