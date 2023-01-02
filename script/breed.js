"use strict";

// // DOM get element by id

const submitBreedBtn = document.getElementById("submit-btn");
const idBreedInput = document.getElementById("input-id");
const nameBreedInput = document.getElementById("input-breed");

const typeBreedInput = document.getElementById("input-type");

// DOM get element by id asm2
// let sideBar = document.getElementById("sidebar");
// //I. Bắt sự kiện Click vào nút "Submit"
const breedArr = JSON.parse(getFromStorage("localBreedArr"));
submitBreedBtn.addEventListener("click", () => {
  const data = {
    // index: breedArr.index,
    name: nameInput.value,
    type: typeInput.value,
  };
  //   // III. Validate dữ liệu (2 trường khôngg dc bỏ trống)
  let validate = true;
  if (data.name == "" || data.age == "") {
    alert("Please fill all fields");
    validate = false;
  }
  // IV. Thêm thú cưng vào danh sách
  if (validate == true) {
    localBreedArr.push(data);
    renderTableData(breedArr);
    clearInput();
  }

  return localBreedArr;
});
console.log(breedArr);

// clear Input
const clearInput = () => {
  nameInput.value = "";
  typeInput.value = "Select Type";
};

// VII. Xóa một thú cưng

const deletePet = (breedId) => {
  if (confirm("Are you sure?")) {
    let i = breedArr.findIndex((id) => {
      id == petId;
    });
    breedArr.splice(i, 1);
    renderTableData(breedArr);
  }
};
const breedInput = document.getElementById("breedInput");

// V. Hiển thị danh sách thú cưng
function renderTableData(breedArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < breedArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${petArr[i].id}</th>
		<td>${breedArr[i].name}</td>
		<td>${breedArr[i].age}</td>
		<td>${breedArr[i].type}</td>
	  <td>${breedArr[i].weight} kg</td>
		<td>${breedArr[i].lengthPet} cm</td>
		<td>${breedArr[i].breed}</td>

		<td><button type="button" class="btn btn-danger" onclick="deletePet('${breedArr[i].id}')">Delete</button>
		</td>
  `;
    breedInput.appendChild(row);
  }
}

// Lưu dữ liệu
function saveStaticDataToFile() {
  var blob = new Blob(["Welcome to Websparrow.org."], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "static.txt");
}

// //ASM2
// //1. Bổ sung Animation cho Sidebar
// sideBar.classList.toggle("active");
// // sideBar.addEventListener("click", (e) => {
// //   this.classList.toggle("active");
// // });
