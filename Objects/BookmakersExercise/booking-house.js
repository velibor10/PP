"use strict";
(function () {
    // Constructor functions   
    //COUNTRY

    var continent = {
        europe: "EU",
        asia: "AS",
        africa: "AF",
        soutAmerica: "SA",
        nortAmerica: "NA",
        australia: "AU",
    }

    function Country(name, odds, continent) {
        if (!name) {
            throw new Error("Name of country must be defined.");
        }
        if (!odds) {
            throw new Error("Odds of country must be defined.");
        }
        if (!continent) {
            throw new Error("Continent of country must be defined.");
        }
        if (continent !== "EU" && continent !== "AS" && continent !== "AF" && continent !== "SA" && continent !== "NA" && continent !== "AU") {
            throw new Error("Name of the continent isn't valid. Use correct flag.");
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    //PERSON
    function Person(name, surname, dateOfBirth) {
        if (!name) {
            throw new Error("Name of person must be defined.");
        }
        if (!surname) {
            throw new Error("Surname of person must be defined.");
        }
        if (!dateOfBirth) {
            throw new Error("DateOfBirth of person must be defined.");
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.numberOfYears = function () {
            var result;
            var today = new Date();
            result = today.getFullYear() - this.dateOfBirth.getFullYear();
            return result;
        }

        this.getData = function () {
            var result = "";
            result += this.name + " " + this.surname + ", " + this.numberOfYears();
            return result;
        }
    }
    //PLAYER
    function Player(person, betAmount, country) {
        if (!person) {
            throw new Error("Person must be defined.");
        }
        if (!betAmount) {
            throw new Error("Bet Amount must be defined.");
        }
        if (!country) {
            throw new Error("Country must be defined.");
        }
        if (!(person instanceof Person)) {
            throw new Error("Person isn't instance of Person constructor.");
        }
        if (!(country instanceof Country)) {
            throw new Error("Country isn't instance of Country constructor.");
        }
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.expectedWin = function () {
            let expectedWin =  this.betAmount * this.country.odds;
            return expectedWin;
        }

        this.getData = function () {
            var result = "";
            result += this.country.name + ", " + this.expectedWin().toFixed(2) + " eur, " + this.person.getData();
            return result;
        };
       
    }
    //ADDRESS
    function Address(country, city, postalCode, street, number) {
        if (!country) {
            throw new Error("Country must be defined.");
        }
        if (!city) {
            throw new Error("City must be defined.");
        }
        if (!postalCode) {
            throw new Error("Postal Code must be defined.");
        }
        if (!street) {
            throw new Error("Street must be defined.");
        }
        if (!number) {
            throw new Error("Number must be defined.");
        }
        if (!(country instanceof Country)) {
            throw new Error("Country isn't instance of Country constructor.");
        }
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        this.getData = function () {
            var result = "";
            result += this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country.name;
            return result;
        }
    }
    //BETTINGPLACE
    function BettingPlace(address) {
        if (!address) {
            throw new Error("Address must be defined.");
        }
        if (!(address instanceof Address)) {
            throw new Error("Address isn't instance of Address constructor.");
        }
        this.address = address;
        this.listOfPlayers = [];
        this.getSumOfAllBets = function () {
            let sum = 0;
            this.listOfPlayers.forEach(function (player) {
                sum += player.betAmount;
            })
            return sum;
        }

        this.getData = function () {
            var result = "";
            result += this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.getSumOfAllBets();
            return result;
        };
        this.addPlayer = function (player) {
            if (!(player instanceof Player)) {
                throw new Error ("Player must be instance of consturctor Player");
            }
            this.listOfPlayers.push(player);
        }

        this.playerFromSerbia = function () {
            let count = 0;
            for (let i = 0; i < this.listOfPlayers.length; i++) {
                if (this.listOfPlayers[i].country.name === "SR") {
                    count++;
                }
            }
            return count;
        }

    }
    //BETTINGHOUSE
    function BettingHouse(competition) {
        if (!competition) {
            throw new Error("Competition must be defined.");
        }
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
        };
        this.getData = function () {
            var result = "";
            result += "Football World Cup Winner, " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers() + " bets" + "\n\t";
            this.listOfBettingPlaces.forEach(function (bettingPlace){
                result += "\t" + bettingPlace.getData() + "\n";
                bettingPlace.listOfPlayers.forEach(function (player) {
                    result += "\t\t" + player.getData() + "\n";
                })
            })
            return result + this.playersFromSerbia();
        };
        this.numberOfPlayers = function () {
            var result = 0;
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                result += this.listOfBettingPlaces[i].listOfPlayers.length;
            }
            return result;
        };

        this.playersFromSerbia = function () {
            let count = 0;
            for (let i = 0; i < this.listOfBettingPlaces.length; i++) {
                count += this.listOfBettingPlaces[i].playerFromSerbia();
            }
           return "There are " + count + " bets on Serbia";
        }
        //this.playerInfo = function() {
        //    var result = "";
        //    for (var i = 0; i < maxbet.listOfBettingPlaces.length; i++) {
        //        result += maxbet.listOfBettingPlaces[i].getData() + "\n\t\t" + playerInf();
        //    }
        //  function playerInf() {
        //      var result = "";
        //      for (var j = 0; j < maxbet.listOfBettingPlaces[i].listOfPlayers.length; j++) {
        //          if (j !==  maxbet.listOfBettingPlaces[i].listOfPlayers.length - 1) {
        //              result += maxbet.listOfBettingPlaces[i].listOfPlayers[j].getData() + " years" + "\n\t\t";
        //          }
        //            else {
        //                result += maxbet.listOfBettingPlaces[i].listOfPlayers[j].getData() +  " years" + "\n\t";
        //            }
        //        }
        //        return result;
        //    }
        //    return result;
        //}
    }
  
    function createBettingPlace(countryCode, odds, continent, city, zipCode, street, number) {
        let country = new Country (countryCode, odds, continent);
        let address = new Address (country, city, zipCode, street, number);
        return new BettingPlace(address);
    }

    function createPlayer (name, surname, date, amount, countryCode, odds, continent) {
        let person = new Person (name, surname, date);
        let country = new Country (countryCode, odds, continent);
        return new Player (person, amount, country);
    }

    // TESTING
    var maxbet = new BettingHouse("fudbal");
    let player1 = createPlayer ("Petar", "Petrovic", "11/25/1980", 15000, "SR", 40, continent.europe)
    let player2 = createPlayer ("Jovan", "Mitrovic", "03/15/1975", 20000, "SR", 40, continent.europe)
    let player3 = createPlayer ("Petar", "Petrovic", "11/25/1980", 30000, "GR", 40, continent.europe)
    let player4 = createPlayer ("Petar", "Petrovic", "11/25/1980", 40000, "SR", 40, continent.europe)
    
   
    var maxbetNoviSad = createBettingPlace("SR", 20, continent.europe,"Novi Sad", 21000, "Bul. Evrope", 12);
    var maxbetBeograd = createBettingPlace("SR", 10, continent.europe,"Beograd", 11000, "Pozeska", 120);
    maxbetNoviSad.addPlayer(player1);
    maxbetNoviSad.addPlayer(player2);
    maxbetBeograd.addPlayer(player3);
    maxbetBeograd.addPlayer(player4);
    maxbet.addBettingPlace(maxbetNoviSad);
    maxbet.addBettingPlace(maxbetBeograd);
    console.log(maxbet.getData());

})();