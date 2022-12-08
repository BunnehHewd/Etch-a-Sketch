let box = document.getElementById('container');
const size = document.querySelector('.size');
let value = 16; //Initial grid size
const theme = document.querySelectorAll('button[type="button"]');

// Color arrays
const warmSelect = ['#F5C1Cf', '#FFD9E5', '#F8FFDE', '#FFEFC9', '#FFCFB0'];
let index = 0;


let currentcolor = "black";
let currenttheme = "black";


function removeChildren(box) {
    while (box.firstChild) { // While there is a child, remove that child
        box.removeChild(box.firstChild);
    }
}

// -----Functions

//Creates initial grid
function createGrid() {
    removeChildren(box);

    const warmRand = warmSelect[Math.floor(Math.random() * warmSelect.length)];

    for (i = 0; i < value * value; i++) {
        var div = document.createElement("div");
        div.classList.add("cell");
        box.appendChild(div);
    }
    box.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    box.style.gridTemplaterows = `repeat(${value}, 1fr)`;
    let cell = document.querySelectorAll('.cell');

    cell.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            coloring(cell);
            cell.addEventListener('mouseover', () => {
                indexUp();
            })
            
            
            console.log("testing");
        })
    });

    size.textContent = `${value} X ${value}`;
}


function indexUp () {
    if(index < warmSelect.length - 1){
        index++;
    } else {
        index = 0;
    }

    currentcolor = warmSelect[`${index}`];
}

// -------Events


// Event for changes
document.addEventListener('input', function (e) {
    value = document.getElementById('grid').value;
    console.log(value);
    createGrid();
});



function coloring(cell) {
    cell.setAttribute('style', `background-color: ${currentcolor}`);

    theme.forEach(button => {
        button.addEventListener('click', () =>{
            if(button.classList.contains('pastelWarm')) {

                currentcolor = warmSelect[`${index}`];
                console.log(currentcolor);
            } else if(button.classList.contains('pastelCold')) {
                currentcolor = "blue";
            } else if(button.classList.contains('greyscale')) {
                currentcolor = "grey";
            } else if(button.classList.contains('black')) {
                currentcolor = "black";
            } else {
                currentcolor = "yellow";
            }
        })
    })
}




/*

function color(e) {
    c 
    e.setAttribute('style', 'background-color: black'); 


    theme.forEach(button => {
        button.addEventListener('click', () => {
            e.addEventListener('mouseover', () => {
                if(button.classList.contains('pastelWarm')){
                    e.target.style = 'background-color: red';
                    console.log("enter");        
                } else {
                   //  
                    console.log("why");
                }
            })
        })
    });

}



function colors() {
   
       
}

*/
createGrid();
//colors();