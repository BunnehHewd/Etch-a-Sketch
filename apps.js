let box = document.getElementById('container');

let value = 16;

function createGrid() {
    for (i = 0; i < value * value; i++) {
        var div = document.createElement("div");
        div.classList.add("cell");
        box.appendChild(div);
    }
 
    box.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    box.style.gridTemplaterows = `repeat(${value}, 1fr)`;
}

function removeChildren(box) {
    while(box.firstChild) { // While there is a child, remove that child
        box.removeChild(box.firstChild);
    }
}

createGrid();

document.addEventListener('input', function(e) {
  value = document.getElementById('grid').value; 
  console.log(value);
  resize(value);
});


function resize(value) {
    removeChildren(box);
    for (i = 0; i < value * value; i++) {
        var div = document.createElement("div");
        div.classList.add("cell");
        box.appendChild(div);
    }

    box.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    box.style.gridTemplaterows = `repeat(${value}, 1fr)`;
}



