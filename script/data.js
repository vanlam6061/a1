"use strict";
const dataExport = JSON.stringify(getFromStorage("localPetArr"));
function saveStaticDataToFile() {
  var blob = new Blob([dataExport], {
    type: "application/json",
  });
  saveAs(blob, "exportData.json");
}
let readedContent;
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", handleFiles, false);

function handleFiles(event) {
  let fileList = event.target.files;
  const reader = new FileReader();
  reader.onloadend = function () {
    readedContent = JSON.parse(reader.result);
    console.log("#2", readedContent);
  };
  reader.readAsText(fileList[0]);
}

console.log(readedContent);

// function updateDataFromInputFile() {

// }
// let form = document.getElementById('file-form');

// function onLoad(e) {
//   localStorage.setItem('key', e.target.result);
// }

// function onError(e) {
//   alert('Encountered error when reading file');
// }

// function fileFormHandler(e) {
//   const input = e.target.querySelector('input');
//   const reader = new FileReader();
//   reader.addEventListener('load', onLoad);
//   reader.addEventListener('load', onError);
//   reader.readAsText(input.files[0]);

//   // có thể render lại chỗ này
//   // .....
// }

// form.addEventListener('submit', fileFormHandler);
