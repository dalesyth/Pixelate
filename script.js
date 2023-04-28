// Your code here
const table = document.getElementsByTagName("table")[0];
const addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow);

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();

function colorize (event) {
  const target = event.target
  if (target.className.length) {
    target.className = ''
  } else {
    target.className = 'red'
  }
}

function selectColor (event) {
  console.log(event.target.value);
  target.className = event.target.value; 
}

