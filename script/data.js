"use strict";
const dataArr = JSON.parse(getFromStorage("localPetArr"));
let dataExport = JSON.stringify(dataArr);
//export dataExport
function saveStaticDataToFile() {
  var blob = new Blob([dataExport], {
    type: "application/json",
  });
  saveAs(blob, "exportData.json");
}
// read import data
let readContent;
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", handleFiles);

function handleFiles(event) {
  let fileList = event.target.files;
  let readerA = new FileReader();
  readerA.readAsText(fileList[0], "UTF-8");
  readerA.onload = function () {
    readContent = readerA.result;
  };
}
// import data
function updateDataFromInputFile() {
  let data = JSON.parse(readContent);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dataArr.length; j++) {
      if (dataArr[j].id === data[i].id) {
        dataArr.splice(j, 1);
      }
    }
    const compileData = dataArr.concat(data);
    saveToStorage("localPetArr", JSON.stringify(compileData));
    console.log(compileData);
  }
}
