"use strict";

(function () {

    function checkAndBuy(shopingBag, paymentCard) {
        if(!(shopingBag instanceof ShoppingBag)){
            throw new Error("Shoping bag must be instance of ShopingBag constructor.")
        }
        if(!(paymentCard instanceof PaymentCard)){
            throw new Error("Payment card bag must be instance of PaymentCard constructor.")
        }
    
        // Checking is shoping possible

        let bagPrice = shopingBag.calculateTotalPrice();
        let cardMoney = paymentCard.accountBalance;
        let difference = cardMoney - bagPrice;
        let bill = "";
        
        for (let i = 0; i < shopingBag.listOfProducts.length; i++) {
            bill += shopingBag.listOfProducts[i].getInfo() + "\n";
        }

        if (difference >= 0) {
            console.log("Current balance on your card is " + cardMoney + "dinara \n\n");
            console.log("Your Bill is: \n" + bill + "\n");
            console.log("The purchase is successful \n");
            console.log("The remaining amount of money on your card is: " + difference);
        }
        else {
            console.log("You need " + Math.abs(difference) + " dinara");
        }
    }

// Constructor functions


// Product

function Product (name, price, expirationDate) {

    if (!name) {
        throw new Error ("Name must be defined!");
    }

    if (!price) {
        throw new Error ("Price must be defined!");
    }
    if (typeof price !== "number") {
        throw new Error ("Price must be a number!");
    }

    if (!expirationDate) {
        throw new Error ("Expiration date must be defined!");
    }


    this.productId = (Math.floor(Math.random() * 89999 + 10000));
    this.name = name;
    this.price = parseFloat(price.toFixed(2));
    this.expirationDate = new Date (expirationDate);
    this.getInfo = function () {
        let result = "";
        result += this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.productId + ", " + this.name + ", " + this.price.toFixed(2);
        return result;
    }

}




// ShoppingBag

function ShoppingBag () {
    this.listOfProducts = [];
    this.addProduct = function (product) {

        if (!(product instanceof Product)) {
            throw new Error ("Product must be instance of Product constructor");
        }
        (function (date) {
            let today = new Date();
            let diff;
        
            diff = Math.floor((date.valueOf() - today.valueOf())/(24*60*60*1000));
        
            if (diff < 0) {
                throw new Error ("Expiration date is not valid");
            }
            return diff;
        })(product.expirationDate);
        this.listOfProducts.push(product);
    }
    this.getAveragePrice = function () {

        let result = 0;
        let average = 0;

        this.listOfProducts.forEach(function (element) {
            result += element.price;
        })
        average = (result / this.listOfProducts.length).toFixed(3);
        console.log(average);
    }

    this.getMostExpensive = function () {
        let result = 0;

        this.listOfProducts.forEach(function (element) {
            if (element.price > result) {
                result = element.price;
            }
        })
        console.log(result.toFixed(2));
    }

    this.calculateTotalPrice = function () {

        let totalPrice = 0;

        for (let i = 0; i < this.listOfProducts.length; i++) {
            totalPrice += this.listOfProducts[i].price;
        }
        return totalPrice;
    }
}

// PaymentCard

function PaymentCard (accountBalance, status, validDate) {

    if (!accountBalance) {
        throw new Error ("Account balance must be defined!");
    }

    if (!status) {
        throw new Error ("Status must be defined!");
    }
    if (!validDate) {
        throw new Error ("Valid date must be defined!");
    }

    if (typeof status !== "boolean") {
        throw new Error ("Status must be boolean value");
    }

    if (typeof accountBalance !== "number") {
        throw new Error ("Account balance must be boolean value");
    }

    this.accountBalance = accountBalance;
    this.status = status;
    this.validDate = new Date (validDate);

    (function (date) {
        let today = new Date();
        let diff;
    
        diff = Math.floor((date.valueOf() - today.valueOf()) / (24*60*60*1000));
    
        if (diff < 0) {
            throw new Error ("The card has expired!");
        }
        return diff;
    }) (this.validDate);

}


let visaCard = new PaymentCard (16000.00, true, "11/25/2025");
let shopingBag = new ShoppingBag ();
let product1 = new Product ("Sugar", 506.50, "5/30/2022");
let product2 = new Product ("Eggs", 120.00, "5/30/2022");
let product3 = new Product ("Flour", 250.00, "5/30/2022");
let product4 = new Product ("Salt", 150.50, "5/30/2022");
let product5 = new Product ("Pepper", 506.50, "5/30/2022");
let product6 = new Product ("Rosa", 120.00, "5/30/2022");
let product7 = new Product ("Vital oil", 80.00, "5/30/2022");
let product8 = new Product ("Milka 300g", 300.50, "5/30/2022");
let product9 = new Product ("Kinder surprise", 300.99, "5/30/2022");
let product10 = new Product ("Orbit cold fresh", 60.99, "5/30/2022");

shopingBag.addProduct(product1);
shopingBag.addProduct(product2);
shopingBag.addProduct(product3);
shopingBag.addProduct(product4);
shopingBag.addProduct(product5);
shopingBag.addProduct(product6);
shopingBag.addProduct(product7);
shopingBag.addProduct(product8);
shopingBag.addProduct(product9);
shopingBag.addProduct(product10);


checkAndBuy (shopingBag,visaCard);




})();

