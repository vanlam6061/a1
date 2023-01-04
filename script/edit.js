"use strict";
// Lấy dữ liệu từ local và hiển thị
const editPetArr = JSON.parse(getFromStorage("localPetArr"));
function renderEditTableData(petArr) {
  tableBodyEl.innerHTML = "";
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
    <td>${petArr[i].bmi ?? "?"} </td>
		<td>${petArr[i].date}</td>
		<td><button type="button" class="btn btn-danger" onclick="editPet('${
      petArr[i].id
    }')">Edit</button>
		</td>
  `;
    tableBodyEl.appendChild(row);
  }
}
renderEditTableData(editPetArr);

//function edit pet
const form = document.getElementsByTagName("form");
const editPet = function () {
  form.style.display = "block";
  form.innerHTML = `
  <div class="form-group row mb-3">
								<label for="input-id" class="col-sm-3 col-form-label"></label>
								<div class="col-sm-9">
									<input type="text" class="form-control" id="input-id" placeholder="Input ID" disabled>
                  ${petArr[i].id}</div>
							</div>
							<div class="form-group row mb-3">
								<label for="input-name" class="col-sm-3 col-form-label">Pet Name</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" id="input-name" placeholder="Input Name">${petArr[i].name}
								</div>
								<label for="input-age" class="col-sm-1 col-form-label"
									style="text-align:right">Age</label>
								<div class="col-sm-3">
									<input type="number" class="form-control" id="input-age" placeholder="Input Age">
								</div>
							</div>
							<div class="form-group row mb-3">
								<label for="input-type" class="col-sm-3 col-form-label">Type</label>
								<div class="col-sm-9">
									<select class="form-control" id="input-type">
										<option>Select Type</option>
										<option>Dog</option>
										<option>Cat</option>
									</select>
								</div>
							</div>
							<div class="form-group row mb-3">
								<label for="input-weight" class="col-sm-3 col-form-label">Weight</label>
								<div class="col-sm-3">
									<input type="number" class="form-control" id="input-weight"
										placeholder="Input Weight">
								</div>

								<label for="input-length" class="col-sm-3 col-form-label"
									style="text-align:right">Length</label>
								<div class="col-sm-3">
									<input type="number" class="form-control" id="input-length"
										placeholder="Input Length">
								</div>
							</div>
							<div class="form-group row mb-3">
								<label class="col-sm-3 col-form-label">Color</label>
								<div class="col-sm-3">
									<input type="color" class="form-control" id="input-color-1">
								</div>
								<label for="input-breed" class="col-sm-3 col-form-label"
									style="text-align:right">Breed</label>
								<div class="col-sm-3">
									<select class="form-control" id="input-breed">
										<option>Select Breed</option>
									</select>
								</div>
							</div>
							<div class="form-group row mb-3">
								<div class="col-sm-3"></div>
								<div class="custom-control custom-checkbox col-sm-3">
									<input type="checkbox" class="custom-control-input" id="input-vaccinated">
									<label class="custom-control-label" for="input-vaccinated">Vaccinated</label>
								</div>
								<div class="custom-control custom-checkbox col-sm-3">
									<input type="checkbox" class="custom-control-input" id="input-dewormed">
									<label class="custom-control-label" for="input-dewormed">Dewormed</label>
								</div>
								<div class="custom-control custom-checkbox col-sm-3">
									<input type="checkbox" class="custom-control-input" id="input-sterilized">
									<label class="custom-control-label" for="input-sterilized">Sterilized</label>
								</div>
							</div>
							<button type="button" class="btn btn-primary" id="submit-btn">Submit</button>
  `;
};
