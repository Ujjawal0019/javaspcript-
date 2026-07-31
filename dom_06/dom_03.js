// PART 3: CREATING AND REMOVING ELEMENTS
// Adding new elements to the page or deleting existing ones

const newDiv = document.createElement("div");
newDiv.textContent = "I am a newly created element";
newDiv.classList.add("new-box");

const container = document.querySelector("#container");
container.appendChild(newDiv);

const newListItem = document.createElement("li");
newListItem.textContent = "First Item";

const list = document.querySelector("ul");
list.insertBefore(newListItem, list.firstElementChild);

const oldElement = document.querySelector(".remove-me");
oldElement.remove();