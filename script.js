const btn = document.querySelector("button")
const container = document.querySelector("#container");
const row = document.createElement("div");
const column = document.createElement("div");

//function to remove and then remake the grid when button is clicked
function remakeGrid(width, height) {
    //make the new sketchpad
    for (let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        //loop through and make 4 columns within the row div
        for (let i = 0; i < width; i++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseenter", () => {
                column.style.backgroundColor = "black";
            })
        }
    }
}

btn.addEventListener("click", () => {
    const width = prompt("How many squares wide do you want your sketchpad?");
    const height = prompt("How many squares high do you want your sketchpad?");
    remakeGrid(width, height);
})
