var difficultyImg = [
  "bronze",
  "silver",
  "gold",
  "platinum",
  "master",
  "grand_master",
];
var diffImgs = document.querySelector(".diffImage");
var spells = [
  "Cold_Snap",
  "Ghost_Walk",
  "Ice_Wall",
  "EMP",
  "Tornado",
  "Alacrity",
  "Sun_Strike",
  "Forge_Spirit",
  "Chaos_Meteor",
  "Deafening Blast",
];
// var spellPostion = ["Spell1", "Spell2", "Spell3"]
var spellShuffle = ["Quas", "Wex", "Exort"];
var Cold_Snap = ["Quas", "Quas", "Quas"];
var Ghost_Walk = ["Quas", "Quas", "Wex"];
var Ice_Wall = ["Exort", "Quas", "Quas"];
var EMP = ["Wex", "Wex", "Wex"];
var Tornado = ["Quas", "Wex", "Wex"];
var Alacrity = ["Exort", "Wex", "Wex"];
var Sun_Strike = ["Exort", "Exort", "Exort"];
var Forge_Spirit = ["Exort", "Exort", "Quas"];
var Chaos_Meteor = ["Exort", "Exort", "Wex"];
var Deafening_blast = ["Exort", "Quas", "Wex"];
var i = 0;
var SpellKeys = [
  Cold_Snap,
  Ghost_Walk,
  Ice_Wall,
  EMP,
  Tornado,
  Alacrity,
  Sun_Strike,
  Forge_Spirit,
  Chaos_Meteor,
  Deafening_blast,
];

// Vygenerování náhodného spellu
function randomSpell() {
  return Math.round(Math.random() * (spells.length - 1 - 0) + 0);
}

// Změna obtížnosti
document
  .getElementById("changeDifficulty")
  .addEventListener("click", function () {
    if (i == difficultyImg.length - 1) {
      i = 0;
    } else {
      i++;
    }
    diffImgs.src = "Images/Difficulty/" + difficultyImg[i] + ".jpg";
  });

//zjištění nastavené obtížnosti
function setDifficulty() {
  return document
    .getElementsByClassName("diffImage")[0]
    .getAttribute("src")
    .slice(18, -4);
}

// Zachytávání kláves
document.body.addEventListener("keyup", function (event) {
  if (event.key == "q") {
    spellShuffle.unshift("Quas");
  } else if (event.key == "w") {
    spellShuffle.unshift("Wex");
  } else if (event.key == "e") {
    spellShuffle.unshift("Exort");
  } else if (event.key == "r") {
    invoke();
  } else if (event.key == "Spell1") {
    console.log("Spell1");
  } else if (event.key == "Speall2") {
    console.log("Spell2");
  } else {
    ("");
  }

  document.getElementById("spell1").src =
    "Images/Spells/" + spellShuffle[2] + ".jpg";
  document.getElementById("spell2").src =
    "Images/Spells/" + spellShuffle[1] + ".jpg";
  document.getElementById("spell3").src =
    "Images/Spells/" + spellShuffle[0] + ".jpg";
});

// Schování spellů
function hideSpells() {
  document.getElementById("spell1").style.visibility = "hidden";
  document.getElementById("spell2").style.visibility = "hidden";
  document.getElementById("spell3").style.visibility = "hidden";
}

function invoke() {
  let kouzlo1 = document
    .getElementById("spell1")
    .getAttribute("src")
    .slice(14, -4);
  let kouzlo2 = document
    .getElementById("spell2")
    .getAttribute("src")
    .slice(14, -4);
  let kouzlo3 = document
    .getElementById("spell3")
    .getAttribute("src")
    .slice(14, -4);
  let kouzla = [kouzlo1, kouzlo2, kouzlo3];

  if (kouzla.sort().every((value, index) => value === Cold_Snap[index])) {
    console.log("Cold_Snap");
  } else if (
    kouzla.sort().every((value, index) => value === Ghost_Walk[index])
  ) {
    console.log("Ghost_Walk");
  } else if (kouzla.sort().every((value, index) => value === Ice_Wall[index])) {
    console.log("Ice_Wall");
  } else if (kouzla.sort().every((value, index) => value === EMP[index])) {
    console.log("EMP");
  } else if (kouzla.sort().every((value, index) => value === Tornado[index])) {
    console.log("Tornado");
  } else if (kouzla.sort().every((value, index) => value === Alacrity[index])) {
    console.log("Alacrity");
  } else if (
    kouzla.sort().every((value, index) => value === Sun_Strike[index])
  ) {
    console.log("Sun_Strike");
  } else if (
    kouzla.sort().every((value, index) => value === Forge_Spirit[index])
  ) {
    console.log("Forge_Spirit");
  } else if (
    kouzla.sort().every((value, index) => value === Chaos_Meteor[index])
  ) {
    console.log("Chaos_Meteor");
  } else if (
    kouzla.sort().every((value, index) => value === Deafening_blast[index])
  ) {
    console.log("Deafening_blast");
  }

  document.getElementById("spell4").src = "Images/Spells/" + spells[1] + ".jpg";
  document.getElementById("spell5").src = "Images/Spells/" + spells[0] + ".jpg";
}
