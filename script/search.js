"use strict";
// load dữ liệu từ local storage
const searchArr = JSON.parse(getFromStorage("localPetArr"));
console.log(searchArr);
//DOM get id
const findBtn = document.getElementById("find-btn");
const idSearchInput = document.getElementById("input-id");
const nameSearchInput = document.getElementById("input-name");
const breedSearchInput = document.getElementById("input-breed");
const typeSearchInput = document.getElementById("input-type");
const vaccinatedSearchInput = document.getElementById("input-vaccinated");
const dewormedSearchInput = document.getElementById("input-dewormed");
const sterilizedSearchInput = document.getElementById("input-sterilized");

const breedLoading = JSON.parse(getFromStorage("localBreedArr"));
const showTypePets = () => {
  // breedSearchInput.innerHTML = "";
  breedLoading.forEach((breed) => {
    const breedOption = document.createElement("option");
    breedOption.innerHTML = `${breed.name}`;
    breedSearchInput.appendChild(breedOption);
  });
};
showTypePets();
findBtn.addEventListener("click", () => {
  const dataSearch = {
    id: idSearchInput.value,
    name: nameSearchInput.value,
    type: typeSearchInput.value,
    breed: breedSearchInput.value,
    vaccinated: vaccinatedSearchInput.checked,
    dewormed: dewormedSearchInput.checked,
    sterilized: sterilizedSearchInput.checked,
  };
  const filteredPets = searchArr
    .filter((arr) => dataSearch.id === "" || arr.id.includes(dataSearch.id))
    .filter(
      (arr) => dataSearch.name === "" || arr.name.includes(dataSearch.name)
    )
    .filter(
      (arr) => dataSearch.type === "Select Type" || arr.type === dataSearch.type
    )
    .filter(
      (arr) =>
        dataSearch.breed === "Select Breed" || arr.breed === dataSearch.breed
    )
    .filter(
      (arr) =>
        (dataSearch.vaccinated === false &&
          dataSearch.dewormed === false &&
          dataSearch.sterilized === false) ||
        (dataSearch.vaccinated === true && arr.vaccinated === true) ||
        (dataSearch.dewormed === true && arr.dewormed === true) ||
        (dataSearch.sterilized === true && arr.sterilized === true)
    );

  renderTableSearch(filteredPets);
});

const tableBodyE1 = document.getElementById("tbody");
function renderTableSearch(petArr) {
  tableBodyE1.innerHTML = "";
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
		<td><button type="button" class="btn btn-danger" onclick="deletePet('${
      petArr[i].id
    }')">Delete</button>
		</td>
  `;
    tableBodyE1.appendChild(row);
  }
}
