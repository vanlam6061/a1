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

idSearchInput.addEventListener("change", showId());

function showId() {
  // const firstChildElement = idSearchInput.firstChild;
  idSearchInput.innerHTML = "";
  // idSearchInput.appendChild(firstChildElement);
  const id = idSearchInput.value;
  console.log(id);
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].id.includes(id)) {
      const idOption = document.createElement("option");
      idOption.innerHTML = `${idSearchInput.id}`;
      idSearchInput.appendChild(idOption);
    }
  }
}

// function showId() {
//   breedInput.innerHTML = "";
//   if (typeInput.value == "dog") {
//     let dogBreed = breedFilterArr.filter((arr) => arr.type == "Dog");
//     console.log(dogBreed);
//     dogBreed.forEach((dog) => {
//       const dogOption = document.createElement("option");
//       dogOption.innerHTML = `${dog.name}`;
//       breedInput.appendChild(dogOption);
//     });
//   } else {
//     let catBreed = breedFilterArr.filter((arr) => arr.type == "Cat");
//     console.log(catBreed);
//     catBreed.forEach((cat) => {
//       const catOption = document.createElement("option");
//       catOption.innerHTML = `${cat.name}`;
//       breedInput.appendChild(catOption);
//     });
//   }
// }

// submitSearchBtn.addEventListener("click", () => {
//   const dataSeach = {
//     id: idSearchInput.value,
//     name: nameSearchInput.value,
//     age: parseInt(ageSearchInput.value),
//     type: typeSearchInput.value,
//     breed: breedSearchInput.value,
//     vaccinated: vaccinatedSearchInput.checked,
//     dewormed: dewormedSearchInput.checked,
//     sterilized: sterilizedSearchInput.checked,
//   };
// });

// let searchItems = [];

// for (let i = 0; i < searchArr.length; i++) {
//   searchItems = Object.values(searchArr[i]);
// }

// function isSubset(array1, array2) {
//   return array2.every((element) => array1.includes(element));
// }
