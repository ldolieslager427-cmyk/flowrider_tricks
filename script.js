let currentCategory = "flowboard";
let tricks = flowboardTricks; // default

const trickList = document.getElementById("trick-list");
const searchBar = document.getElementById("search-bar");
const darkLightBtn = document.getElementById("dark-light-toggle");

// Display tricks
function displayTricks(tricksArray) {
  trickList.innerHTML = "";
  // Sort by difficulty
  const levels = ["Fundamental","Beginner","Intermediate","Advanced","Expert"];
  levels.forEach(level => {
    tricksArray.filter(t=>t.level===level).forEach(trick => {
      const div = document.createElement("div");
      div.className = "trick-item";
      div.innerHTML = `<strong>${trick.name}</strong><br>${trick.level}`;
      div.onclick = () => showTrick(trick);
      trickList.appendChild(div);
    });
  });
}

// Show trick page
function showTrick(trick) {
  trickList.innerHTML = `
    <h2>${trick.name}</h2>
    <p><strong>Difficulty:</strong> ${trick.level}</p>
    <p><strong>How to do it:</strong> ${trick.how}</p>
    <p><strong>Prerequisites:</strong> ${trick.pre.length > 0 ? trick.pre.join(", ") : "None"}</p>
    <iframe width="420" height="315" src="${trick.video}" frameborder="0" allowfullscreen></iframe>
    <button onclick="displayTricks(tricks)">Back to list</button>
  `;
}

// Category buttons
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    if(currentCategory==="flowboard") tricks=flowboardTricks;
    if(currentCategory==="bodyboard") tricks=bodyboardTricks || [];
    if(currentCategory==="standup") tricks=standupTricks || [];
    displayTricks(tricks);
  });
});

// Search bar
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = tricks.filter(t => t.name.toLowerCase().includes(query));
  displayTricks(filtered);
});

// Dark/Light toggle
darkLightBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Initial display
displayTricks(tricks);
