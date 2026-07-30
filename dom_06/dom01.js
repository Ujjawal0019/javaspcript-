// PART 1: SELECTING ELEMENTS
// Finding the HTML elements you want to work with

const byId = document.getElementById("header-title");
const byClass = document.getElementsByClassName("list-item");
const byTag = document.getElementsByTagName("p");

const firstMatch = document.querySelector(".container > p");
const allMatches = document.querySelectorAll(".list-item");

allMatches.forEach((element) => {
  element.style.color = "red";
});