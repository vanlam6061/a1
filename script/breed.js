"use strict";

// // DOM get element by id

const submitBreedBtn = document.getElementById("submit-btn");
const nameBreedInput = document.getElementById("input-breed");

const typeBreedInput = document.getElementById("input-type");

let localBreedArr = getFromStorage("localBreedArr")
  ? JSON.parse(getFromStorage("localBreedArr"))
  : [];
//I. Bắt sự kiện Click vào nút "Submit"
submitBreedBtn.addEventListener("click", () => {
  const data = {
    name: nameBreedInput.value,
    type: typeBreedInput.value,
  };
  // III. Validate dữ liệu (2 trường khôngg dc bỏ trống)
  let validateIsTrue = true;
  if (data.name == "" || data.type == "" || data.type == "Select Type") {
    alert("Please fill all fields");
    validateIsTrue = false;
  }
  // IV. Thêm thú cưng vào danh sách
  if (validateIsTrue) {
    localBreedArr.push(data);
    saveToStorage("localBreedArr", JSON.stringify(localBreedArr));
    clearInput();
    renderBreed(localBreedArr);
  }
});

// clear Input
const clearInput = () => {
  nameBreedInput.value = "";
  typeBreedInput.value = "Select Type";
};

const tableBreed = document.getElementById("tbody");
// V. Hiển thị type thú cưng
function renderBreed(breedArr) {
  tableBreed.innerHTML = ``;
  for (let i = 0; i < breedArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${breedArr.indexOf(breedArr[i]) + 1}</th>
		<td>${breedArr[i].name}</td>
		<td>${breedArr[i].type}</td>


		<td><button type="button" class="btn btn-danger" onclick="deletePet('${
      breedArr.indexOf(breedArr[i]) + 1
    }')">Delete</button>
		</td>
  `;
    tableBreed.appendChild(row);
  }
}

// VII. Xóa một thú cưng
const breedArr = JSON.parse(getFromStorage("localBreedArr"));
const deletePet = (breedId) => {
  if (confirm("Are you sure?")) {
    let i = breedArr.findIndex((id) => {
      id == breedId;
    });
    breedArr.splice(i - 1, 1);
    saveToStorage("localBreedArr", JSON.stringify(breedArr));
  }
  renderBreed(breedArr);
};

renderBreed(breedArr);
