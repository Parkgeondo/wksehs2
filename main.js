const rangeInput = document.querySelector("input[type = 'range']");
const textBox = document.getElementById('textBox');
const selectBox = document.querySelector("select[name = 'font']");
const gray = document.querySelector(".range_gray");
const leftAlign = document.querySelector(".left");
const leftAlign_line = document.querySelectorAll(".left div");
const centerAlign = document.querySelector(".center");
const centerAlign_line = document.querySelectorAll(".center div");
const rightAlign = document.querySelector(".right");
const rightAlign_line = document.querySelectorAll(".right div");
const image = document.querySelectorAll(".text_line img");
const middle = document.querySelectorAll(".middle");
const alps = document.querySelectorAll(".Sorting span");
const button = document.querySelector(".darkmode");
const button_in = document.querySelector(".darkmode div");


button.addEventListener("click", function(){
    button_in.classList.toggle("open");    
})

button.addEventListener('click',function(){
    if (button_in.classList.contains("open")){
        document.documentElement.setAttribute('color-theme', 'dark');
        
    }else {
      document.documentElement.setAttribute('color-theme', 'light');
    }
  });

alps.forEach(alp => {
    alp.addEventListener("click", function(){
      alps.forEach(alp =>{
        alp.classList.remove("selected");      
      })
      alp.classList.add("selected");
    })
  })

rangeInput.addEventListener("input", function () {
    for (i = 0; i < middle.length; i++) {
        middle[i].style.fontSize = this.value + "px";
    }
    const double = this.value * 19 / 4 - 57;
    gray.style.width = `${double}px`;
})

selectBox.addEventListener("change", function () {
    for (i = 0; i < middle.length; i++) {
        middle[i].style.fontSize = this.value + "px";
    }
})

function left() {
    for (i = 0; i < middle.length; i++) {
        let align = leftAlign;
        middle[i].style.textAlign = align.style.textAlign;
    }
    for (i = 0; i < 3; i++) {
        leftAlign_line[i].classList.add("selectColor");
        centerAlign_line[i].classList.remove("selectColor");
        rightAlign_line[i].classList.remove("selectColor");
    }

    // leftAlign.innerHTML = '<img src="icon/left.svg">';
    // centerAlign.innerHTML = '<img src="icon/middle_un.svg">';
    // rightAlign.innerHTML = '<img src="icon/right_un.svg">';
}
function center() {
    for (i = 0; i < middle.length; i++) {
        let align = centerAlign;
        middle[i].style.textAlign = align.style.textAlign;
    }
    for (i = 0; i < 3; i++) {
        leftAlign_line[i].classList.remove("selectColor");
        centerAlign_line[i].classList.add("selectColor");
        rightAlign_line[i].classList.remove("selectColor");
    }
    // leftAlign.innerHTML = '<img src="icon/left_un.svg">';
    // centerAlign.innerHTML = '<img src="icon/middle.svg">';
    // rightAlign.innerHTML = '<img src="icon/right_un.svg">';
}
function right() {
    for (i = 0; i < middle.length; i++) {
        let align = rightAlign;
        middle[i].style.textAlign = align.style.textAlign;
    }
    for (i = 0; i < 3; i++) {
        leftAlign_line[i].classList.remove("selectColor");
        centerAlign_line[i].classList.remove("selectColor");
        rightAlign_line[i].classList.add("selectColor");
    }
    // leftAlign.innerHTML = '<img src="icon/left_un.svg">';
    // centerAlign.innerHTML = '<img src="icon/middle_un.svg">';
    // rightAlign.innerHTML = '<img src="icon/right.svg">';
}
function Text() {
    for (i = 0; i < middle.length; i++) {
        middle[i].innerHTML = textBox.value;
    }
}



