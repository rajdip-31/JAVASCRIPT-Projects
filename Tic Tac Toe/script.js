let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset");
let neGameBtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".message");
let msg = document.querySelector("#winner");

let turnX = 1; //PlayerX,PlayerY
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// Clicking on each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Is Clicked");
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner(winner);
  });
});

function disableBoxes() {
  for (box of boxes) {
    box.disabled = 1;
  }
}

function showWinner(winner) {
  msg.innerHTML = `Congratulation! Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disableBoxes();
}
function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner! => ", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
}

function enableBoxes() {
  for (box of boxes) {
    box.disabled = 0;
    box.innerHTML = "";
  }
}
const resetGame = () => {
  turnX = 1;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




