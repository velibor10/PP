// 1. Create constructor funtion for creating objects that represents your favourite coffee. 
//Please include coffee name, strength, flavour, milk, sugar, … everything you like!

//Create constructor function that creates objects of coffee.



function Coffee ($name, $strength, $flavour, $milkContent, $sugarContent) {
    this.name = $name;
    this.strength = $strength;
    this.flavour = $flavour;
    this.milkContent = $milkContent;
    this.sugarContent = $sugarContent;
}

let turkishCoffee = new Coffee("Turkish", "mild", "oriental", false, 5);
let instantCoffee1 = new Coffee("Nescaffe 3 in 1", "strong", "orange", true, 10);
let instantCoffee2 = new Coffee("Nescaffe 3 in 1", "normal", "banana", true, 10);
let instantCoffee3 = new Coffee("Nescaffe 3 in 1", "late", "apple", true, 10);
let instantCoffee4 = new Coffee("Nescaffe 2 in 1", "late", "apple", false, 10);


console.log(turkishCoffee);
console.log("-----------------");
console.log(instantCoffee1);
console.log("-----------------");
console.log(instantCoffee2);
console.log("-----------------");
console.log(instantCoffee3);
console.log("-----------------");
console.log(instantCoffee4);


// Creating object with method that creates objects inside an object

function getMenu(typeOfItems) {
    console.log(typeOfItems);
}


function Coffee ($name, $strength, $flavour, $milkContent, $sugarContent) {
    this.name = $name;
    this.strength = $strength;
    this.flavour = $flavour;
    this.milkContent = $milkContent;
    this.sugarContent = $sugarContent;
}

function Drinks ($name, $price) {
    this.name = $name;
    this.price = $price;
}

let coffees = {

    createCoffees: function(name, strength, flavour, milkContent, sugarContent, objectName) {

        coffees[objectName] = new Coffee(name, strength, flavour, milkContent, sugarContent)

    }

};

let drinks = {

    createDrinks: function(name, price, objectName) {

        drinks[objectName] = new Drinks(name, price);

    }

};

//coffees inserted inside and object named coffees 

coffees.createCoffees("Turkish", "mild", "oriental", false, 5, "coffee1");
coffees.createCoffees("Turkish", "mild", "oriental", false, 5, "coffee2");
coffees.createCoffees("Cuban", "mild", "oriental", false, 5, "coffee3");

//Calling function that print different coffees in menu.

drinks.createDrinks("Coca-Cola", 150, "drink1");
drinks.createDrinks("Fanta", 130, "drink2");
drinks.createDrinks("Sprite", 140, "drink3");

console.log("Coffee on menu:");
getMenu(coffees);
console.log("Drinks on menu:");
getMenu(drinks);

// 2. Create an object that represents your favourite movie.
// Please include title, actors, director, genre, popularity. 



function Movies($title, $actors, $director, $genre, $popularity) {
    this.title = $title;
    this.actors = $actors;
    this.director = $director;
    this.genre = $genre;
    this.popularity = $popularity;
}

let titanic = new Movies("Titanic", ["Leonardo DiCaprio", "Kate Winslet"], "James Cameron", "drama", 10);
let spiderMan = new Movies("Spiderman", ["Tobey Maguire", "Williem Defoe", "Kirsten Danst"], "Sam Raimi", "action", 8);



console.log(titanic);
console.log("-----------------");
console.log(spiderMan);



/* 3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not.
Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */


function Project($description, $language, $gitRepository, $developmentStatus) {
    this.description = $description;
    this.language = $language;
    this.gitRepository = $gitRepository;
    this.developmentStatus = $developmentStatus;

    this.projectRepository = function () {
        console.log(this.gitRepository)
    }

    this.isJavaScript = function () {
        if(this.language === "Java Script") {
            console.log("Project was written in Java Script.");
        }
        else {
            console.log("Project wasn't written in Java Script.")
        }
    }

    this.isDevelopment = function () {
        if (this.developmentStatus === true) {
            console.log("Project is in development.")
        }
        else {
            console.log("Project is not in development.")
        }
    }


}

let object = new Project("School support", "Java Script", "www.gitHub.com", true);

object.projectRepository();
console.log("-----------------\n");
object.isJavaScript();
console.log("-----------------\n");
object.isDevelopment();


/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. */


function Recipe($name, $cuisine, $complexity, $ingredients, $time, $instructions) {
    this.name = $name;
    this.cuisine = $cuisine;
    this.complexity = $complexity;
    this.ingredients = $ingredients;
    this.preparingTime = $time;
    this.instructions = $instructions;

    this.ingredientsList = function () {
        console.log("Ingredients for this recipe are: " + this.ingredients.join(","))
    }

    this.preparingTime15Minutes = function () {
        if (this.preparingTime < 15) {
            console.log("Meal can be prepared for 15 miutes")
        }
        else {
            console.log("Meal can 't be prepared in 15 minutes");
        }
    }

    this.changeCousine = function (newCuisine) {
        this.cuisine = newCuisine;
    }

    this.removeGivenIngredient = function (ingredientForRemove) {
        let newIngredients = [];
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i] !== ingredientForRemove) {
                newIngredients[newIngredients.length] = this.ingredients[i];
            }
        }
        this.ingredients = newIngredients.slice();
    }
}


let applePie = new Recipe ("Apple pie", "American", 3, ["water", "eggs", "milk", "flour"], 45, "Pie must be baked in oven 30 minutes")

console.log(applePie);

applePie.ingredientsList();

console.log("---------------------------------------\n");

applePie.preparingTime15Minutes();

console.log("---------------------------------------\n");

applePie.changeCousine("German");

applePie.removeGivenIngredient("milk");

console.log(applePie);




