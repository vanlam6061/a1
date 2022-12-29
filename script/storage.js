"use strict";
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}
let localPetArr = [
  {
    id: "P001",
    name: "Tom",
    age: 3,
    type: "Cat",
    weight: 5,
    lengthPet: 50,
    color: "#ff0000",
    breed: "Tabby",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    bmi: null,
    date: "01/03/2022",
  },
  {
    id: "P002",
    name: "Type",
    age: 5,
    type: "Dog",
    weight: 3,
    lengthPet: 40,
    color: "#008000",
    breed: "Mixed Breed",
    vaccinated: false,
    dewormed: false,
    sterilized: false,
    bmi: null,
    date: "02/03/2022",
  },
];
saveToStorage("localPetArr", JSON.stringify(localPetArr));
console.log(localPetArr);
