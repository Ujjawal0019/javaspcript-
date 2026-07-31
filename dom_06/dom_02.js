// PART 2: MODIFYING ELEMENTS
// Changing text, HTML, attributes, and CSS classes

const title = document.querySelector("#main-title");
title.textContent = "Welcome to the DOM";
title.innerHTML = "Welcome to the <strong>DOM</strong>";

const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.id = "new-link-id";

const box = document.querySelector(".box");
box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("active");

box.style.backgroundColor = "blue";
box.style.fontSize = "20px";