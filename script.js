let score = 0;
let time = 10;
let current = -1;
let timer;

function start() {
  score = 0;
  time = 10;
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = time;

  timer = setInterval(gameLoop, 1000);
}

function gameLoop() {
  time--;
  document.getElementById("time").innerText = time;

  let holes = document.getElementsByClassName("hole");

  for (let i = 0; i < holes.length; i++) {
    holes[i].classList.remove("active");
  }

  current = Math.floor(Math.random() * 6);
  holes[current].classList.add("active");

  if (time <= 0) {
    clearInterval(timer);
    alert("遊戲結束！分數：" + score);
  }
}

function hit(index) {
  if (index === current) {
    score++;
    document.getElementById("score").innerText = score;
  }
}