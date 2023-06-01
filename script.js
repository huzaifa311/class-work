// function formatText(command, value = null) {
//   if (command === "foreColor" || command === "hiliteColor") {
//     var color = prompt("Enter a color:");
//     document.execCommand(command, false, color);
//   } else if (command === "heading") {
//     var headingLevel = prompt("Enter a heading level (1-6):");
//     if (headingLevel >= 1 && headingLevel <= 6) {
//       document.execCommand("formatBlock", false, "h" + headingLevel);
//     } else {
//       alert("Invalid heading level. Please enter a number between 1 and 6.");
//     }
//   } else if (command === "paragraph") {
//     document.execCommand("formatBlock", false, "p");
//   } else {
//     document.execCommand(command, false, null);
//   }
// }

// function changeTextColor() {
//   var color = prompt("Enter a text color:");
//   document.execCommand("foreColor", false, color);
// }

// function changeBackgroundColor() {
//   var color = prompt("Enter a background color:");
//   document.execCommand("hiliteColor", false, color);
// }

// function convertToHeading() {
//   var headingLevel = prompt("Enter a heading level (1-6):");
//   if (headingLevel >= 1 && headingLevel <= 6) {
//     document.execCommand("formatBlock", false, "h" + headingLevel);
//   } else {
//     alert("Invalid heading level. Please enter a number between 1 and 6.");
//   }
// }

// function convertToParagraph() {
//   document.execCommand("formatBlock", false, "p");
// }

var container = document.getElementById("container");
var allHeadings = document.getElementsByTagName("h2");
var addBoxBtn = document.getElementById("addBoxBtn");

addBoxBtn.addEventListener("click", addBox);

function addBox() {
  var div = document.createElement("div");
  div.className = "newDabba";
  var p = document.createElement("p");
  p.innerText =
    "JavaScript is a high-level programming language primarily used for creating interactive and dynamic websites. It was originally developed by Brendan Eich at Netscape Communications ";
  div.appendChild(p);
  var img = document.createElement("img");
  img.src = "data:image/jpeg;base64,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";
  img.className = "image";
  div.appendChild(img);
  container.appendChild(div);
  return;
}