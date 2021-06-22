
// VARIABLES


let genres = ["Action", "Drama", "Comedy", "Fantasy", "History", "Documentary", "Horror", "Science Fiction"];
let programs = [];
let movies = [];

//CLASSES


/* Class Movie */

class Movie {

    constructor(title, genre, length) {

        if (!title) {
            throw new Error("Title of movie must be defined.");
        }

        if (!genre) {
            throw new Error("Genre of movie must be defined.");
        }

        if (!length) {
            throw new Error("Length of movie must be defined.");
        }

        if (typeof title !== "string") {
            throw new Error("Input for movie title must be a string.");
        }

        if (typeof genre !== "string") {
            throw new Error("Input for movie genre must be a string.");
        }

        if (typeof length !== "number") {
            throw new Error("Input for movie title must be a number.");
        }

        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    getData() {
        let result = "";
        result += this.title + ", " + this.length + ", " + this.genre.slice(0, 1).toUpperCase() + this.genre.slice(this.genre.length - 1).toUpperCase();
        return result;
    }
}

/* Class Program */

class Program {
    constructor(date) {

        if (!date) {
            throw new Error("Date of program must be defined");
        }

        this.date = new Date(date);
        this.listOfMovies = [];
    }

    addMovie(movie) {

        if (!(movie instanceof Movie)) {
            throw new Error("Movie must be from class Movie.");
        }

        this.listOfMovies.push(movie);
    }

    getDate() {
        let result = "";
        result += this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ".";
        return result;
    }

    filmsLength() {
        let length = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
            length += this.listOfMovies[i].length;
        }
        return length;
    }

    getReport() {
        let result = "";
        result += this.getDate() + " " + this.listOfMovies.length + " movies, duration: " + this.filmsLength() + " min.";
        return result;
    }

}


/* TESTING */





