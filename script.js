let players = [];
let currentRotation = 0;

// 🧠 AI Truth Templates
const truthTemplates = [
  "What is your biggest fear in life?",
  "What is something you never told your best friend?",
  "Who do you secretly like right now?",
  "What is your most embarrassing moment?",
  "What is your biggest regret?",
  "What is a secret you are hiding?",
  "When was the last time you lied?"
];

// 🔥 AI Dare Templates
const dareTemplates = [
  "Do 20 push-ups right now 💪",
  "Dance like nobody is watching for 1 minute 💃",
  "Speak in a funny accent for 2 minutes 🎤",
  "Act like a robot 🤖 for 30 seconds",
  "Call a friend and say 'I miss you' 😳",
  "Do your best TikTok dance",
  "Pretend you are a teacher for 1 minute",
  "Make a funny advertisement for water bottle"
];


// ➕ Add Player
function addPlayer() {
  let name = document.getElementById("playerName").value;
  if (name.trim() === "") return;

  players.push(name);
  document.getElementById("playerName").value = "";
  renderPlayers();
}


// 👥 Show Players
function renderPlayers() {
  let box = document.getElementById("players");
  box.innerHTML = "";

  players.forEach(p => {
    let div = document.createElement("div");
    div.className = "player";
    div.innerText = p;
    box.appendChild(div);
  });
}


// 🔄 Spin Bottle (AI selects player)
function spinBottle() {
  if (players.length === 0) {
    alert("Add players first!");
    return;
  }

  let bottle = document.getElementById("bottle");

  let spin = Math.floor(Math.random() * 3600) + 720;
  currentRotation += spin;

  bottle.style.transform = `rotate(${currentRotation}deg)`;

  document.getElementById("resultBox").innerText =
    "🤖 AI is choosing player...";

  setTimeout(() => {
    let selected = players[Math.floor(Math.random() * players.length)];

    document.getElementById("resultBox").innerText =
      "🎯 AI Selected: " + selected;
  }, 3000);
}


// 🤖 AI Truth Generator
function showTruth() {
  let index = Math.floor(Math.random() * truthTemplates.length);

  let aiTruth = "🤖 AI Truth: " + truthTemplates[index];

  document.getElementById("resultBox").innerText = aiTruth;
}


// 🤖 AI Dare Generator
function showDare() {
  let index = Math.floor(Math.random() * dareTemplates.length);

  let aiDare = "🔥 AI Dare: " + dareTemplates[index];

  document.getElementById("resultBox").innerText = aiDare;
}