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
  img.src = "download.jpeg";
  img.className = "image";
  div.appendChild(img);
  container.appendChild(div);
  return;
}
