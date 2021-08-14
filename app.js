const fs = require('fs');

genders = ['f', 'm'];

femaleNames = ['Anna', 'Aleksandra', 'Ewelina', 'Michalina', 'Edyta', 'Wioletta'];

maleNames = ['Adam', 'Grzegorz', 'Ryszard', 'Tomasz', 'Wojciech', 'Maksymilian'];

lastNames = ['Nowak', 'Wróbel', 'Kowalczyk', 'Mazur', 'Krawczyk', 'Pawlak'];

const randChoice = (arr) => {
 return arr[Math.floor(Math.random()*arr.length)]; 
};

function randAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const people = [];

for (let i = 0; i < 20; i++) {

    let person = {};

    person.gender = randChoice(genders);

    if (person.gender === 'f') {
    person.name = randChoice(femaleNames);
    } else {
    person.name = randChoice(maleNames);
    }

    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    person.age = randAge(18, 78);

    person.email = `${person.name}.${person.lastName}@gmail.com`;

    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile("people.json", data, (err) => {
    if (err) 
        console.log ("Something went wrong", err);
    else
        console.log("File has been successfully generated! Check people.json");
  });