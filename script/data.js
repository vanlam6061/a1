"use strict";
const dataExport = JSON.stringify(getFromStorage("localPetArr"));
function saveStaticDataToFile() {
  var blob = new Blob([dataExport], {
    type: "application/json",
  });
  saveAs(blob, "exportData.json");
}

const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", handleFiles, false);

function handleFiles(event) {
  let fileList = event.target.files;
  console.log(fileList);
  const reader = new FileReader();
  reader.onloadend = function () {
    const readedContent = reader.result;
    console.log("#2", readedContent);
  };
  reader.readAsText(fileList[0]);
}
