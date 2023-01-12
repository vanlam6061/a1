"use strict";
const dataArr = JSON.parse(getFromStorage("localPetArr"));
let dataExport = JSON.stringify(dataArr);
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
  };
  reader.readAsText(fileList[0]);
}
function updateDataFromInputFile() {
  console.log(readedContent);
  let data = JSON.parse(readedContent);
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
