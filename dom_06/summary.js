// 1. SELECTING ELEMENTS
const appContainer = document.getElementById("app");
const submitBtn = document.querySelector(".btn-submit");
const inputField = document.querySelector("input[type='text']");
const itemList = document.querySelector("#item-list");

// 2. CREATING & APPENDING ELEMENTS
function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.className = "delete-btn";
  
  li.appendChild(deleteBtn);
  
  return li;
}

// 3. MODIFYING ELEMENTS
appContainer.classList.add("initialized");
inputField.setAttribute("placeholder", "Type something here...");
submitBtn.style.backgroundColor = "blue";
submitBtn.style.color = "white";
submitBtn.disabled = false;

// 4. EVENT HANDLING 
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  
  const inputValue = inputField.value.trim();
  
  if (inputValue) {
    const newItem = createListItem(inputValue);
    itemList.appendChild(newItem);
    inputField.value = ""; 
  }
});

// 5. EVENT DELEGATION & REMOVING ELEMENTS
// Listening on the parent container to handle clicks on dynamic children
itemList.addEventListener("click", (event) => {
  // Toggle a class if the list item itself is clicked
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("highlighted");
  }
  
  // Remove the element if the delete button is clicked
  if (event.target.classList.contains("delete-btn")) {
    const itemToRemove = event.target.parentElement;
    itemToRemove.remove();
  }
});