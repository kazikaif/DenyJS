let colums = 27;
let rows = 50;

let col = document.querySelector(".col");
let row = document.querySelector(".rows");
let body = document.querySelector(".body");
let Selected = document.querySelector(".selected");
let form = document.querySelector(".form");
console.log(form);

for (let i = 0; i < colums; i++) {
  let cell = document.createElement("div");
  cell.classList.add("colcell");
  if (i === 0) {
    col.appendChild(cell);
    continue;
  }
  cell.textContent = String.fromCharCode(i + 64);
  col.appendChild(cell);
}

for (let i = 0; i < rows; i++) {
  let cell2 = document.createElement("div");
  cell2.classList.add("rowcell");
  cell2.textContent = i + 1;
  row.appendChild(cell2);
}

for (let i = 1; i <= rows; i++) {
  let cellr = document.createElement("div");
  cellr.classList.add("cellr");

  for (let j = 1; j < colums; j++) {
    let cellc = document.createElement("span");
    cellc.id = String.fromCharCode(j + 64) + i;
    cellc.classList.add("cellc");
    cellc.contentEditable = true;
    cellr.appendChild(cellc);
  }
  body.appendChild(cellr);
}
let SelectedCell = " ";

body.addEventListener("click", (e) => {
  Selected.textContent = e.target.id;
  SelectedCell = e.target;
  console.log(e);
  console.log(e.target);
});

form.addEventListener("change", () => {
  if (!SelectedCell) {
    alert("Please select a cell");

  }
  const formData = {
    fontfamily: form["fontfamily"].value,
    fontSize: form["fontSize"].value,
    fontWeight: form["isBold"].checked,
    fontItalic: form["isItalic"].checked,
    fontUnderline: form["isUnderline"].checked,
    algin: form["align"].value,
    textColor: form["textColor"].value,
    backColor: form["backColor"].value,
  };
  applyStyleToSelectedCell(formData);
});

function applyStyleToSelectedCell(formData) {
  SelectedCell.style.fontSize = formData.fontSize;
  SelectedCell.style.fontfamily = formData.fontfamily;
  SelectedCell.style.fontWeight = formData.fontWeight ? "bold" : "normal";
  SelectedCell.style.fontStyle = formData.fontItalic ? "italic" : "normal";
  SelectedCell.style.textDecoration = formData.fontUnderline ? "underline" : "none";
  SelectedCell.style.textAlign = formData.algin;
  SelectedCell.style.color = formData.textColor;
  SelectedCell.style.backgroundColor = formData.backColor;
}
