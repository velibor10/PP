/*   

Festival

In your IDE of choice, create a new JavaScript file named festival.js and make it so that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. 
Writing a simple command console.log(“Hi”) inside this function and running code should output “Hi“ in the console.

Create constructor functions with properties representing the following:
Genre - name
Movie - title, genre (instance of Genre), length
Program - date, list of movies (initially empty) and total number of movies 
Festival - name, list of programs (initially empty), and number of movies in all programs.

Add method getData to Genre which returns formatted string as first and last letter of genre name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY

Add getData method to Movie. It should return a formatted string consisting of the movie title, length and genre acronym.
The Shawshank Redemption, 130min, AN

Add addMovie method to Program. It should receive a Movie and add the movie to the movie list of a given program. 

Add addProgram method to Festival. It should receive a Program and add the program to the list of the given festival’s programs. 

Add getData method to Program. It should return a formatted string of all data related to the program. 
The string should contain date, program length (calculated from length of all movies in a list) and data about movies in a list (see the example below).
To display movie data, use Movie’s getData method.

Date, program length from all movies
     First movie title, length and genre
     Second movie title, length and genre
     Third movie title, length and genre
     Fourth movie name and length and genre


Add method getData to Festival which return formatted string like festival name, number of movies in all programs and all programs listed. Use Programs getData method to list all programs. (example output is shown below)

Weekend festival has 4 movie titles
    28.10.2017, program duration 368min
        Spider-Man: Homecoming, 133min, AN
        War for the Planet of the Apes, 140min, DA
        The Dark Tower, 95min, WN
    29.10.2017, program duration 108min
        Deadpool, 108min, CY

Inside your immediately-invoking function, add createMovie function that receives a movie title, movie length and genre (as a string) as parameters and returns a created Movie.

Inside your immediately-invoking function, add createProgram function that receives a date and returns a created Program.

Start creating your movie festival.

In your main program function, create an instance of the Festival object. 

Create two instances of Program using createProgram function.

Create four instances of Movie object using createMovie function. Add all created movies to both programs using the addMovie method.

Add the created program instances to the created festival instance using festival’s addProgram method.

Display festival’s data using getData method.

Hints
List is a synonym for array, so when we say a list of movies, it’s actually an array of movie objects
Use JS built-in Date()object to create Date object
Use \t and \n special strings to format output 
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array


*/


(function () {

    // Declaration function

    function createMovie(title, genre, length) {
        var gen = new Genre(genre);
        return new Movie(title, gen, length);
    }

    // Construnctor funtions


    // Genre

    class Genre {
        constructor(name) {
            if (!name) {
                throw new Error("Name of genre is required");
            }
            if (typeof name !== "string") {
                throw new Error("Type of name is not a string");
            }

            this.name = name;
        }

        getData() {
            let result = "";
            result += this.name.slice(0, 1).toUpperCase() + this.name[this.name.length - 1].toUpperCase();
            return result;
        }

    }


    //Movie

    class Movie {
        constructor(title, genre, length) {
            if (!title) {
                throw new Error("Title must be defined!");
            }

            if (!genre) {
                throw new Error("Genre must be defined!");
            }
            if (!length) {
                throw new Error("Length must be defined!");
            }

            if (!(genre instanceof Genre)) {
                throw new Error("Genre is not instance of Genre");
            }

            if (typeof length !== "number") {
                throw new Error("Lenght must be a number");
            }

            this.title = title;
            this.genre = genre;
            this.length = length;

        }

        getData() {
            let result = "";
            result += `${this.title}, ${this.length} min, ${this.genre.getData()}`;
            return result;
        }

    }

    // Program

    class Program{
        constructor(date, totalNumberMoviesInProgram){
            if (!date) {
                throw new Error("Programs date must be defined.");
            }
            if (!totalNumberMoviesInProgram) {
                throw new Error("Programs date must be defined.");
            }
            if (typeof totalNumberMoviesInProgram !== "number") {
                throw new Error("Total number of movies in program must be number");
            }

            this.date = new Date(date);
            this.totalNumberMoviesInProgram = totalNumberMoviesInProgram;
            this.listOfMovies = [];

        }

        numberOfMovies() {
            return this.listOfMovies.length;
        }

        addMovie(movie) {
            if (!(movie instanceof Movie)) {
                throw new Error("Movie must be instance of Movie constructor.");
            }
            try {
                if (this.numberOfMovies() < this.totalNumberMoviesInProgram) {
                    this.listOfMovies.push(movie);
                }
                else {
                    throw new Error(`List of movies on program for ${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()} is full. Can't add another movie\n\n`);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        getData() {
            let result = ``;
            result = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}, program duration: `;
            let length = 0;
            this.listOfMovies.forEach(function (movie) {
                length += movie.length;
            })
            result += length + " min.\n\t\t";
            for (let i = 0; i < this.listOfMovies.length; i++) {
                if (i != this.listOfMovies.length - 1) {
                    result += this.listOfMovies[i].getData() + "\n\t\t";
                }
                else {
                    result += this.listOfMovies[i].getData() + "\n";
                }
            }
            return result;
        }
    }

    //FESTIVAL

    class Festival{

        constructor(name, maxNumberOfMoviesInFestival){
            if (!name) {
                throw new Error("Name of festival must be defined.");
            }
            if (!maxNumberOfMoviesInFestival) {
                throw new Error("Max number of movies on festival must be defined.");
            }
            if ((typeof maxNumberOfMoviesInFestival !== "number")) {
                throw new Error("Max number of movies must be a number");
            }
            this.name = name;
            this.listOfPrograms = [];
            this.maxNumberOfMoviesInFestival = maxNumberOfMoviesInFestival;
        }

        numberOfMoviesInFestival() {
            let result = 0;
            this.listOfPrograms.forEach(function (programs) {
                result += programs.listOfMovies.length;
            })
            return result;
        }

        addProgram(program) {
            if (!(program instanceof Program)) {
                throw new Error("Program must be instance of Program constructor")
            }
            try {
                let count = this.numberOfMoviesInFestival();
                if (program.listOfMovies.length <= this.maxNumberOfMoviesInFestival - count) {
                    this.listOfPrograms.push(program);
                }
                else {
                    throw new Error(`Program for ${program.date.getDate()}.${(program.date.getMonth() + 1)}.${program.date.getFullYear()} can't be added because list of movies on this program is large\n\n`);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        getData() {
            let result = `FESTIVAL: `;
            result += `${this.name} has ${this.numberOfMoviesInFestival()} movie titles\n\t`;
            this.listOfPrograms.forEach(function (program) {
                result += program.getData() + "\t";
            })
            return result;
        }
    }




    //Testing 

    //Festivals

    let festival1 = new Festival("Museum night", 6);
    let festival2 = new Festival("Museum night 2", 6);

    //Programs

    let program1 = new Program("06.05.2021", 3);
    let program2 = new Program("06.12.2021", 2);
    let program3 = new Program("06.19.2021", 2);


    //Movies

    let movie1 = createMovie("Troya", "drama", 70);
    let movie2 = createMovie("Wrat of titans", "drama", 80);
    let movie3 = createMovie("Agora", "drama", 80);
    let movie4 = createMovie("Batman", "fantasy", 70);
    let movie5 = createMovie("Batman 2", "fantasy", 90);
    let movie6 = createMovie("300", "fantasy", 80);
    let movie7 = createMovie("American Pie 1", "comedy", 70);


    //Create a festivals


    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie4);
    program2.addMovie(movie5);
    program3.addMovie(movie6);
    festival1.addProgram(program1);
    festival1.addProgram(program2);
    festival1.addProgram(program3);
    festival2.addProgram(program1);
    festival2.addProgram(program2);
    festival2.addProgram(program3);
    console.log(festival1.getData());
    console.log(festival2.getData());


})();
