let box = document.getElementById('container');
const size = document.querySelector('.size');


let value = 16; //Initial grid size
const theme = document.querySelectorAll('button[type="button"]');
let bool = true;

// Color arrays
const warmSelect = ['#F5C1Cf', '#FFD9E5', '#F8FFDE', '#FFEFC9', '#FFCFB0'];
const coldSelect = ['#DDF2F4', '#84A6D6', '#4382BB', '#E4CEE0', '#A15D98'];
const greySelect = ['#AEAEAE', '#949494', '#5C5E60', '#5D6D7E', '#97978F'];
let index = 0;
let change = "";

let currentcolor = "black";

function removeChildren(box) {
    while (box.firstChild) { // While there is a child, remove that child
        box.removeChild(box.firstChild);
    }
}

// -----Functions

//Creates initial grid
function createGrid() {
    removeChildren(box);

    for (i = 0; i < value * value; i++) {
        var div = document.createElement("div");
        div.classList.add("cell");
        box.appendChild(div);
    }
    box.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    box.style.gridTemplaterows = `repeat(${value}, 1fr)`;

    let cell = document.querySelectorAll('.cell');
    
    cell.forEach(el => {
        el.addEventListener('mouseover', () => {
            colorSquare(el);
            indexUp();
           // coloring(el, `${index}`); 
            console.log("in");            
        });
    });

    
    size.textContent = `${value} X ${value}`;
}


function indexUp () {
    if(index < warmSelect.length - 1){
        index++;
    } else {
        index = 0;
    }
    console.log(index);
}

// -------Events


// Event for changes
document.addEventListener('input', function (e) {
    value = document.getElementById('grid').value;
    createGrid();
});



theme.forEach(button => {
    button.addEventListener('click', () =>{
        if(button.classList.contains('pastelWarm')) {  
            change = "warm";
        } else if(button.classList.contains('pastelCold')) {
            change = "cold";
        } else if(button.classList.contains('greyscale')) {
            change = "grey";
        } else if(button.classList.contains('black')) {
            change = "black";
        } else if(button.classList.contains('rainbow')) {
            change = "rainbow";
        } else {
            createGrid();
        }
    })
})


function colorSquare(el) {
    indexUp();
    
    if (change === "warm") {
        currentcolor =  warmSelect[`${index}`];
    } else if (change === "cold") {
        currentcolor =  coldSelect[`${index}`];
    } else if (change === "grey") {
        currentcolor =  greySelect[`${index}`];
    } else if (change === "black") {
        currentcolor = "black";
    } else if (change === "rainbow") {
        currentcolor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    el.setAttribute('style', `background-color: ${currentcolor}`);
    
}


console.log(index);

createGrid();
