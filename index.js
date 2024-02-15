let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turn0 = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  resetBtn.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "blue";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    if (count === 1) {
      resetBtn.classList.remove("hide");
    }
    let isWinner = cheackwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = "Game was Draw.";
  msgContainer.classList.remove("hide");
  resetBtn.classList.add("hide");
  disableBoxes;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `Congratulation, Winner Is ${Winner}`;
  msgContainer.classList.remove("hide");
  resetBtn.classList.add("hide");
  disableBoxes();
};

const cheackwinner = () => {
  for (let pattern of winPattern) {
    let postion1Value = boxes[pattern[0]].innerText;
    let postion2Value = boxes[pattern[1]].innerText;
    let postion3Value = boxes[pattern[2]].innerText;

    if (postion1Value != "" && postion2Value != "" && postion3Value != "") {
      if (postion1Value === postion2Value && postion2Value === postion3Value) {
        showWinner(postion1Value);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
