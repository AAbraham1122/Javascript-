const color = document.getElementById("colorPicker"); // linking color picker to js
const height = document.getElementById("inputHeight"); // linking declaring height 
const width = document.getElementById("inputWidth"); // linking declaring widht
const size = document.getElementById("sizePicker"); // linking sizepicker
const canvas = document.getElementById("pixelCanvas"); // linking pixel canvas.


// Adding function for onclick for the from submit

size.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
}

// function to make the grid based on the hieght and width inputs
function makeGrid() {
    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            const cell = row.insertCell(c);

            function fillSquare(event) {
                var str1 = 'background-color:';
                var str2 = color.value;

                cell.setAttribute("style", str1.concat(str2));
            }
            cell.addEventListener("click", fillSquare)
        }
    }

}
// to remove the grid 
function clearGrid() {
    while (canvas.firstChild) { canvas.removeChild(canvas.firstChild); }
}