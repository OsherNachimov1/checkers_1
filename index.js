const addButton = document.querySelector("[data-add-button]");
const removeButton = document.querySelector("[data-remove-button]");
const whiteSquares = document.querySelectorAll(".white");
const rowInput = document.querySelector("[data-row-input]");
const columnInput = document.querySelector("[data-column-input]");
const topCont = document.querySelector(".top-container");

const matrix = [
  [
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
  ],
  [
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
  ],
  [
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
  ],
  [
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
  ],
  [
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
  ],
  [
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
  ],
  [
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
  ],
  [
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
    { element: null, color: "black" },
    { element: null, color: "white" },
  ],
];

const brown = `<div class="brown"></div>`;

const white = `<div class="white"></div>`;

const black = `<div class="black"></div>`;

function inputValidation() {
  return (
    !rowInput.value ||
    !columnInput.value ||
    rowInput.value < 1 ||
    rowInput.value > 8 ||
    columnInput.value > 8 ||
    columnInput.value < 1 ||
    isNaN(rowInput.value) ||
    isNaN(columnInput.value)
  );
}

addButton.addEventListener("click", () => {
  if (inputValidation() === true) {
    alert("error wrong input");
  } else {
    const element = matrix[rowInput.value - 1][columnInput.value - 1].element;
    if (element.innerHTML === "") {
      element.innerHTML = brown;
    } else {
      alert("pawn is already inplace");
    }
  }
});

removeButton.addEventListener("click", () => {
  if (inputValidation() === true) {
    alert("error wrong input");
  } else {
    const element = matrix[rowInput.value - 1][columnInput.value - 1].element;
    if (element.innerHTML === "") {
      alert(" no pawn is  inplace");
    } else {
      element.innerHTML = "";
    }
  }
});

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix.length; col++) {
    const square = document.createElement("div");

    if (matrix[row][col].color === "white") {
      square.className = "white";
    } else {
      square.className = "black";
    }
    matrix[row][col].element = square;
    topCont.appendChild(square);
  }
}
