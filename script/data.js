"use strict";
const dataExport = JSON.stringify(getFromStorage("localPetArr"));
function saveStaticDataToFile() {
  var blob = new Blob([dataExport], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "exportData.txt");
}

function loadDataFromFile() {
  try {
    let fso = new ActiveXObject("Scripting.FileSystemObject");
    let fh = fso.OpenTextFile(filename, 1);
    let contents = fh.ReadAll();
    fh.Close();
    return contents;
  } catch (Exception) {
    return "Cannot open file :(";
  }
}

// function getFileContents() {
//   let fileForUpload = document.forms[0].fileForUpload;
//   let fileName = fileForUpload.value;

//   if (fileForUpload.files) {
//     let fileContents = fileForUpload.files.item(0).getAsBinary();
//     document.forms[0].fileContents.innerHTML = fileContents;
//   } else {
//     // try the IE method
//     let fileContents = ieReadFile(fileName);
//     document.forms[0].fileContents.innerHTML = fileContents;
//   }
// }
// getFileContents();
