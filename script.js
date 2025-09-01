const container = document.querySelector("#container");
//contains 4 grid rows each containing four cells

//loop 16 times, creating a cell and adding it to grid
for (let i = 0; i < 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
}