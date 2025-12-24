document.addEventListener("DOMContentLoaded", ()=>{

  const levelColors = {
    "Beginner": "#2ecc71",
    "Lower Intermediate": "#3498db",
    "Intermediate": "#f1c40f",
    "Advanced": "#e67e22",
    "Expert": "#e74c3c",
    "Beginner → Intermediate": "#27ae60",
    "Intermediate → Advanced": "#f39c12"
  };

  // ===== DARK/LIGHT THEME =====
  const themeBtns = document.querySelectorAll("#theme-toggle");
  themeBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.body.classList.toggle("light");
      localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
    });
  });
  if(localStorage.getItem("theme") === "light") document.body.classList.add("light");

  // ===== BACK TO TOP =====
  const backTop = document.getElementById("back-top");
  if(backTop){
    window.addEventListener("scroll", ()=>{
      backTop.style.display = window.scrollY > 200 ? "block" : "none";
    });
    backTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
  }

  // ===== HOME PAGE =====
  const bodyContainer = document.getElementById("bodyboard");
  const standContainer = document.getElementById("standup");
  const searchInput = document.getElementById("search");

  if(bodyContainer && standContainer){
    function sortTricks(tricks){
      const levelOrder = ["Beginner","Lower Intermediate","Intermediate","Advanced","Expert","Beginner → Intermediate","Intermediate → Advanced"];
      return tricks.sort((a,b)=> levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
    }
    function createButtons(tricks, container){
      container.innerHTML = "";
      sortTricks(tricks).forEach(trick=>{
        const btn = document.createElement("button");
        btn.textContent = trick.level + " – " + trick.name;
        btn.style.backgroundColor = levelColors[trick.level] || "#1e3d59";
        if(localStorage.getItem("learned_"+trick.id)) btn.style.boxShadow = "0 0 10px #f1c40f inset";
        btn.onclick = ()=> window.location.href = `trick.html?id=${trick.id}`;
        container.appendChild(btn);
      });
    }

    createButtons(bodyboardTricks, bodyContainer);
    createButtons(standupTricks, standContainer);

    if(searchInput){
      searchInput.addEventListener("input", e=>{
        const q = e.target.value.toLowerCase();
        createButtons(bodyboardTricks.filter(t=>t.name.toLowerCase().includes(q)), bodyContainer);
        createButtons(standupTricks.filter(t=>t.name.toLowerCase().includes(q)), standContainer);
      });
    }
  }

  // ===== TRICK PAGE =====
  const trickId = new URLSearchParams(window.location.search).get("id");
  if(trickId){
    const trick = [...bodyboardTricks, ...standupTricks].find(t=>t.id===trickId);
    if(trick){
      const nameEl = document.getElementById("name");
      const levelEl = document.getElementById("level");
      const howEl = document.getElementById("how");
      const preEl = document.getElementById("pre");
      const tipsEl = document.getElementById("tips");
      const iframe = document.getElementById("video");
      const learnBtn = document.getElementById("learned-btn");

      if(nameEl) nameEl.textContent = trick.name;
      if(levelEl){
        levelEl.textContent = trick.level;
        levelEl.style.color = levelColors[trick.level] || "#fff";
      }
      if(howEl) howEl.textContent = trick.how;
      if(preEl) trick.pre.forEach(p=>{
        const li = document.createElement("li");
        li.textContent = p;
        preEl.appendChild(li);
      });
      if(tipsEl) tipsEl.innerHTML += "";
      if(iframe) iframe.src = trick.video !== "TBD" ? trick.video : "";
      if(learnBtn){
        if(localStorage.getItem("learned_"+trick.id)) learnBtn.textContent="Learned ✅";
        learnBtn.addEventListener("click", ()=>{
          localStorage.setItem("learned_"+trick.id,true);
          learnBtn.textContent="Learned ✅";
        });
      }

      const togglePre = document.getElementById("toggle-pre");
      if(togglePre) togglePre.addEventListener("click", ()=>{
        preEl.classList.toggle("collapsed");
        togglePre.textContent = preEl.classList.contains("collapsed") ? "[Show]" : "[Hide]";
      });
      const toggleTips = document.getElementById("toggle-tips");
      if(toggleTips){
        toggleTips.addEventListener("click", ()=>{
          tipsEl.classList.toggle("collapsed");
          toggleTips.textContent = tipsEl.classList.contains("collapsed") ? "[Show]" : "[Hide]";
        });
      }
    }
  }

});
