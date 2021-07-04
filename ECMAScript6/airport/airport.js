

(
    function () {
        /* Constructor functions*/
        //PERSON
        class Person {
            constructor(name, surname) {
                if (!name) {
                    throw new Error("Name of person must be defined")
                }
                if (!surname) {
                    throw new Error("Surname of person must be defined")
                }
                this.name = name;
                this.surname = surname;
            }
            getData() {
                let result = `${this.name} ${this.surname}`;
                return result;
            }
        }
        //SEAT
        class Seat {
            constructor(seatNumber = Math.floor(Math.random() * 101), seatCategory = "e") {
                if (seatCategory !== "b" && seatCategory !== "e") {
                    throw new Error("Invalid category input.")
                }
                this.number = seatNumber;
                this.category = seatCategory;
            }
            getData() {
                let result = `${this.number} ${this.category}`;
                return result;
            }
        }
        //PASSENGER
        class Passenger {
            constructor(person, seat) {
                if (!person) {
                    throw new Error("Person must be defined.");
                }
                if (!seat) {
                    throw new Error("Seat must be defined.");
                }
                if (!(person instanceof Person)) {
                    throw new Error("Person must be instance of Person constructor");
                }
                if (!(seat instanceof Seat)) {
                    throw new Error("Seat must be instance of Seat constructor");
                }
                this.person = person;
                this.seat = seat;
            }
            getData() {
                let result = `${this.seat.getData()}, ${this.person.getData()}`;
                return result;
            }
        }
        //FLIGHT
        class Flight {
            constructor(relation, date) {
                this.relation = relation;
                this.date = new Date(date);
                this.listOfPasengers = [];
            }
            addPessanger(passenger) {
                if (!(passenger instanceof Passenger)) {
                    throw new Error("Pessanger must be instance of Pessanger constructor");
                }
                this.listOfPasengers.push(passenger);
            }
            getData() {
                let result = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}, ${this.relation}\n\t`;
                result += this.passengers();
                return result;
            }
            passengers() {
                let result = "";
                for (let i = 0; i < this.listOfPasengers.length; i++) {
                    result += `${this.listOfPasengers[i].getData()}\n\t`;
                }
                return result;
            }
        }
        //AIRPORT
        class Airport {
            constructor() {
                this.name = "Nikola Tesla";
                this.listOfFlights = [];
            }
            addFlight(flight){
                if (!(flight instanceof Flight)) {
                    throw new Error("Flight must be instance of Flight constructor");
                }
                this.listOfFlights.push(flight);
            }
            getData(){
                let result = "";
                result += `Airport: ${this.name}, total passengers: ${this.numberOfPassenger()}\n\n\t${this.flightReport()}`;
                return result;
            }
            flightReport(){
                let result = "";
                for (let i = 0; i < this.listOfFlights.length; i++) {
                    result += `${this.listOfFlights[i].getData()}\n\t`;
                }
                return result;
            }
            numberOfPassenger(){
                let result = 0;
                for (let i = 0; i < this.listOfFlights.length; i++) {
                    result += this.listOfFlights[i].listOfPasengers.length;
                }
                return result; 
            }
        }
        //Functions
        function createFlight(relation, date) {
            return new Flight(relation, date);
        }
        function createPassenger(name, surname, seatNumber, seatCategory) {
            let person = new Person(name, surname);
            let seat = new Seat(seatNumber, seatCategory);
            return new Passenger(person, seat);
        }
        /*Testing*/
        let nikolaTesla = new Airport();
        let passenger1 = createPassenger("John", "Snow", 1, "b");
        let passenger2 = createPassenger("Cersei", "Lannister", 2, "e");
        let passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        let passenger4 = createPassenger("Tyrion", "Lannister");
        let barcelonaNewYork = createFlight("Barcelona - New York", "03/20/2021");
        let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "06/15/2021");
        barcelonaNewYork.addPessanger(passenger1);
        barcelonaNewYork.addPessanger(passenger2);
        barcelonaBelgrade.addPessanger(passenger3);
        barcelonaBelgrade.addPessanger(passenger4);
        nikolaTesla.addFlight(barcelonaNewYork);
        nikolaTesla.addFlight(barcelonaBelgrade);
        console.log(nikolaTesla.getData());
    })();


