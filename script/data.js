"use strict";
const datas = JSON.stringify(getFromStorage("localPetArr"));
let dataArr = JSON.parse(datas);
function saveStaticDataToFile() {
  var blob = new Blob([datas], {
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
console.log(dataArr);
function updateDataFromInputFile() {
  const newData = [];
  console.log(readedContent);
  for (let i = 0; i < readedContent.length; i++) {
    for (let j = 0; j < datas.length; j++) {
      if (dataArr[j].id == readedContent[i].id) {
        newData = dataArr.splice(j, 1);
      }
    }
    newData.concat(readedContent);
    saveToStorage("localPetArr", JSON.stringify(newData));
    console.log(newData);
  }
}
