// 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

let coffee = { name: "nes coffee",
strength: "strong",
flavour: "gold",
milk: true,
sugar: true,
};

console.log(coffee);

// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

let movie = { name: "Notebook",
actor: "Gena Rolands",
director: "Nick Cassavetes",
genre: "comedy",
popularity: "7.5",
};

console.log(movie);

/* 3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not.
Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

function createObject (desc, lang, gitURL, isDev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: gitURL,
        printRepo: function(){
            console.log(gitUrl);
        },
        isJavaScript: function(){
            return lang ==="JavaScript";
        },
        isDevelopment: function(){
            return isDev ? "project in development" : "project is no in development";
        }
    }
    return project;
}

let calculator = createObject("calculator", "Java", "http:gitUrl", true);
console.log(calculator);
    
/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
    Add a method that prints out all the ingredients necessary for the meal preparation. 
    Add a method that checks if a meal can be prepared for 15 minutes. 
    Add a method that changes the type of cuisine to the given value. 
    Add a method that delete a given ingredient from the list of ingredients. */

function createCulinaryRecipe (name, cuisine, complexity, ingredients, time, instruction) {
    return {
        name: name,
        typeOfCuisine: italianCuisine,
        complexity: complexity,
        listOfIngredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,
        necessearyIngredients: function(){
            console.log(listOfIngredients);
        },
        canBePrepared: function(){
            if (preparingTime < 15) {
                return true;
            } else {
                return false;
            }
        },
        changeTypeOfCuisine: function(newCuisine){
            return recipe.typeOfCuisine = newCuisine;
        },
        deleteIngridients: function(ingredients) {

        }
    }
}
