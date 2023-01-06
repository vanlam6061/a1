"use strict";
// load dữ liệu từ local storage
const searchArr = JSON.parse(getFromStorage("localPetArr"));
console.log(searchArr);
//DOM get id
const submitSearchBtn = document.getElementById("submit-btn");
const idSearchInput = document.getElementById("input-id");
const nameSearchInput = document.getElementById("input-name");
const ageSearchInput = document.getElementById("input-age");
const typeSearchInput = document.getElementById("input-type");
const vaccinatedSearchInput = document.getElementById("input-vaccinated");
const dewormedSearchInput = document.getElementById("input-dewormed");
const sterilizedSearchInput = document.getElementById("input-sterilized");

submitSearchBtn.addEventListener("click", () => {
  const dataSeach = {
    id: idSearchInput.value,
    name: nameSearchInput.value,
    age: parseInt(ageSearchInput.value),
    type: typeSearchInput.value,
    breed: breedSearchInput.value,
    vaccinated: vaccinatedSearchInput.checked,
    dewormed: dewormedSearchInput.checked,
    sterilized: sterilizedSearchInput.checked,
  };
});

let searchItems = [];

for (let i = 0; i < searchArr.length; i++) {
  searchItems = Object.values(searchArr[i]);
}

function isSubset(array1, array2) {
  return array2.every((element) => array1.includes(element));
}
