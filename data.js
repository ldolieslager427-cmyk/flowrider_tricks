// ===== FLOWBOARD TRICKS =====
const bodyboardTricks = [
  // Fundamental
  {id:"360_spin", name:"360 Spin", level:"Fundamental", how:"Perform a full rotation in the air.", pre:[], video:"https://www.youtube.com/embed/example1"},
  {id:"assisted_360_spin", name:"Assisted 360 Spin", level:"Fundamental", how:"Perform a 360 spin with assistance from the wave or coach.", pre:["360_spin"], video:"https://www.youtube.com/embed/example2"},
  {id:"assisted_frontside_360_spin", name:"Assisted Frontside 360 Spin", level:"Fundamental", how:"Spin frontside 360 with assistance.", pre:["assisted_360_spin"], video:"https://www.youtube.com/embed/example3"},
  {id:"frontside_360_spin", name:"Frontside 360 Spin", level:"Fundamental", how:"Perform a full frontside rotation in the air.", pre:["360_spin"], video:"https://www.youtube.com/embed/example4"},

  // Beginner
  {id:"acid_drop", name:"Acid Drop", level:"Beginner", how:"Drop into the wave with board nose first.", pre:[], video:"https://www.youtube.com/embed/example5"},
  {id:"backside_180_air", name:"Backside 180 Air", level:"Beginner", how:"Jump and rotate backside 180 in the air.", pre:[], video:"https://www.youtube.com/embed/example6"},
  {id:"body_varial", name:"Body Varial", level:"Beginner", how:"Rotate your body while keeping the board under control.", pre:[], video:"https://www.youtube.com/embed/example7"},
  {id:"fast_plant", name:"Fast Plant", level:"Beginner", how:"Quickly plant your hands to execute the trick.", pre:[], video:"https://www.youtube.com/embed/example8"},
  {id:"lip_slide", name:"Lip Slide", level:"Beginner", how:"Slide along the lip of the wave.", pre:[], video:"https://www.youtube.com/embed/example9"},
  {id:"nozzle_slide", name:"Nozzle Slide", level:"Beginner", how:"Slide on the nozzle section of the wave.", pre:[], video:"https://www.youtube.com/embed/example10"},
  {id:"ollie", name:"Ollie", level:"Beginner", how:"Pop the board into the air without grabbing.", pre:[], video:"https://www.youtube.com/embed/example11"},
  {id:"shuvit", name:"Shuvit", level:"Beginner", how:"Spin the board 180 under your feet without spinning your body.", pre:[], video:"https://www.youtube.com/embed/example12"},

  // Intermediate
  {id:"360_shuvit", name:"360 Shuvit", level:"Intermediate", how:"Spin the board 360 under your feet without spinning your body.", pre:["shuvit"], video:"https://www.youtube.com/embed/example13"},
  {id:"540_big_spin", name:"540 Big Spin",
