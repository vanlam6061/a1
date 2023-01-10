"use strict";

// DOM get element by id
const submitEditBtn = document.getElementById("submit-btn");
const idEditInput = document.getElementById("input-id");
const nameEditInput = document.getElementById("input-name");
const ageEditInput = document.getElementById("input-age");
const typeEditInput = document.getElementById("input-type");
const weightEditInput = document.getElementById("input-weight");
const lengthEditInput = document.getElementById("input-length");
const colorEditInput = document.getElementById("input-color-1");
const breedEditInput = document.getElementById("input-breed");
const vaccinatedEditInput = document.getElementById("input-vaccinated");
const dewormedEditInput = document.getElementById("input-dewormed");
const sterilizedEditInput = document.getElementById("input-sterilized");
const today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
function showTypePets() {
  breedEditInput.innerHTML = "";
  if (typeEditInput.value == "Dog") {
    let dogBreed = breedFilterArr.filter((arr) => arr.type == "Dog");
    console.log(dogBreed);
    dogBreed.forEach((dog) => {
      const dogOption = document.createElement("option");
      dogOption.innerHTML = `${dog.name}`;
      breedEditInput.appendChild(dogOption);
    });
  }
  if (typeEditInput.value == "Cat") {
    let catBreed = breedFilterArr.filter((arr) => arr.type == "Cat");
    console.log(catBreed);
    catBreed.forEach((cat) => {
      const catOption = document.createElement("option");
      catOption.innerHTML = `${cat.name}`;
      breedEditInput.appendChild(catOption);
    });
  }
}
// Lấy dữ liệu từ local và hiển thị
const editPetArr = JSON.parse(getFromStorage("localPetArr"));
console.log(editPetArr);
const editTable = document.getElementById("tbody");
function renderEditTableData(petArr) {
  editTable.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${petArr[i].id}</th>
		<td>${petArr[i].name}</td>
		<td>${petArr[i].age}</td>
		<td>${petArr[i].type}</td>
	  <td>${petArr[i].weight} kg</td>
		<td>${petArr[i].lengthPet} cm</td>
		<td>${petArr[i].breed}</td>
		<td>
		<i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
		</td>
		<td><i class="bi ${
      petArr[i].vaccinated == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
		<td><i class="bi ${
      petArr[i].dewormed == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
		<td><i class="bi ${
      petArr[i].sterilized == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
		<td>${petArr[i].date}</td>
		<td><button type="button" class="btn btn-danger" onclick="editPet('${petArr.indexOf(
      petArr[i]
    )}')">Edit</button>
		</td>
  `;
    editTable.appendChild(row);
  }
}
renderEditTableData(editPetArr);

//Get data from Breed table
const breedFilterArr = JSON.parse(getFromStorage("localBreedArr"));
console.log(breedFilterArr);
// const insertData = () => {
//   breedEditInput.innerHTML = "";
//   breedFilterArr.forEach((arr) => {
//     const breedOption = document.createElement("option");
//     breedOption.innerHTML = `${arr.name}`;
//     breedEditInput.appendChild(breedOption);
//   });
// };
// insertData();
console.log(breedFilterArr);

//function edit pet
const formContainer = document.getElementById("container-form");
const editPet = (indexPetEdit) => {
  formContainer.style.display = "block";

  for (let i = 0; i < editPetArr.length; i++) {
    if (i == indexPetEdit) {
      idEditInput.value = `${editPetArr[i].id}`;
      nameEditInput.value = `${editPetArr[i].name}`;
      ageEditInput.value = `${editPetArr[i].age}`;
      typeEditInput.value = `${editPetArr[i].type}`;
      typeEditInput.addEventListener("change", showTypePets());
      weightEditInput.value = `${editPetArr[i].weight}`;
      lengthEditInput.value = `${editPetArr[i].lengthPet}`;
      colorEditInput.value = `${editPetArr[i].color}`;
      breedEditInput.value = `${editPetArr[i].breed}`;
      vaccinatedEditInput.value = `${editPetArr[i].vaccinated}`;
      dewormedEditInput.vaccinatedEditInput = `${editPetArr[i].vaccinated}`;
      sterilizedEditInput.value = `${editPetArr[i].sterilized}`;
    }
  }
};

typeEditInput.addEventListener("change", showTypePets());
//Submit event
submitEditBtn.addEventListener("click", () => {
  const data = {
    id: idEditInput.value,
    name: nameEditInput.value,
    age: parseInt(ageEditInput.value),
    type: typeEditInput.value,
    weight: weightEditInput.value,
    lengthPet: lengthEditInput.value,
    color: colorEditInput.value,
    breed: breedEditInput.value,
    vaccinated: vaccinatedEditInput.checked,
    dewormed: dewormedEditInput.checked,
    sterilized: sterilizedEditInput.checked,
    date: `${dd}/${mm}/${yyyy}`,
  };
  // III. Validate dữ liệu
  let validate = true;
  if (
    data.id == "" ||
    data.name == "" ||
    data.age == "" ||
    data.lengthPet == "" ||
    data.weight == "" ||
    data.color == ""
  ) {
    alert("Please fill all fields");
    validate = false;
  } else {
    if (data.age < 1 || data.age > 15) {
      alert("Age must be between 1 and 15!");
      validate = false;
    }

    if (data.weight < 1 || data.weight > 15) {
      alert("Weight must be between 1 and 15!");
      validate = false;
    }

    if (data.lengthPet < 1 || data.lengthPet > 100) {
      alert("Length must be between 1 and 100!");
      validate = false;
    }

    if (data.type == "") {
      alert("Please select Type!");
      validate = false;
    }

    if (data.breed == "") {
      alert("Please select Breed!");
      validate = false;
    }
  }
  if (validate) {
    for (let i = 0; i < editPetArr.length; i++) {
      if (data.id == editPetArr[i].id) {
        editPetArr[i] = data;
        renderEditTableData(editPetArr);
        saveToStorage("localPetArr", JSON.stringify(editPetArr));
        formContainer.style.display = "none";
      }
    }
    console.log(editPetArr);
  }
});
