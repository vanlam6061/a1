"use strict";
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
		<td><button type="button" class="btn btn-danger" onclick="editPet('${
      petArr[i].id
    }')">Edit</button>
		</td>
  `;
    editTable.appendChild(row);
  }
}
renderEditTableData(editPetArr);

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

//function edit pet

const formContainer = document.getElementById("container-form");
const editForm = document.getElementsByTagName("form")[0];
const editPet = () => {
	for(let i = 0; i < editPetArr.length; i++) {
		if()
  formContainer.style.display = "block";
  editForm.style.margin = "0 auto";
  idEditInput.value = `${editPetArr.id}`;
  nameEditInput.value = `${editPetArr.name}`;
  ageEditInput.value = `${editPetArr.age}`;
  typeEditInput.value = `${editPetArr.type}`;
  weightEditInput.value = `${editPetArr.weight}`;
  lengthEditInput.value = `${editPetArr.length}`;
  colorEditInput.value = `${editPetArr.color}`;
  breedEditInput.value = `${editPetArr.breed}`;
  vaccinatedEditInput.value = `${editPetArr.vaccinated}`;
  dewormedEditInput.vaccinatedEditInput = `${editPetArr.vaccinated}`;
  sterilizedEditInput.value = `${editPetArr.sterilized}`;
};
