"use strict";

// // DOM get element by id

const submitBreedBtn = document.getElementById("submit-btn");
const nameBreedInput = document.getElementById("input-breed");

const typeBreedInput = document.getElementById("input-type");

// //I. Bắt sự kiện Click vào nút "Submit"
submitBreedBtn.addEventListener("click", () => {
  const data = {
    name: nameBreedInput.value,
    type: typeBreedInput.value,
  };
  //   // III. Validate dữ liệu (2 trường khôngg dc bỏ trống)
  let validateIsTrue = true;
  if (data.name == "" || data.age == "") {
    alert("Please fill all fields");
    validateIsTrue = false;
  }
  // IV. Thêm thú cưng vào danh sách
  if (validateIsTrue) {
    // const breedArr = JSON.parse(getFromStorage("localBreedArr"));
    localBreedArr.push(data);
    saveToStorage("localBreedArr", JSON.stringify(localBreedArr));
    const breedArr = JSON.parse(getFromStorage("localBreedArr"));
    renderTableData(breedArr);
    clearInput();
  }

  // return localBreedArr;
});
// console.log(breedArr);

// clear Input
const clearInput = () => {
  nameBreedInput.value = "";
  typeBreedInput.value = "Select Type";
};

const tableBreed = document.getElementById("tbody");
// V. Hiển thị type thú cưng
function renderTableData(breedArr) {
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

const deletePet = (breedId) => {
  if (confirm("Are you sure?")) {
    let i = breedArr.findIndex((id) => {
      id == petId;
    });
    breedArr.splice(i - 1, 1);
    renderTableData(breedArr);
  }
};

// // Lưu dữ liệu
// function saveStaticDataToFile() {
//   var blob = new Blob(["Welcome to Websparrow.org."], {
//     type: "text/plain;charset=utf-8",
//   });
//   saveAs(blob, "static.txt");
// }

// // //ASM2
// // //1. Bổ sung Animation cho Sidebar
// // sideBar.classList.toggle("active");
// // // sideBar.addEventListener("click", (e) => {
// // //   this.classList.toggle("active");
// // // });console.log(object);
const breedArr = JSON.parse(getFromStorage("localBreedArr"));
renderTableData(breedArr);
