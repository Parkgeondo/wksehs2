const wrapLayer = document.querySelector(".wrap");
const layers = document.querySelectorAll(".move");
const darkMode = document.querySelectorAll(".dark");
const darkModeWrap = document.querySelector(".dark_wrap");
const darkIcon = document.querySelector(".icon3");
const aside = document.querySelector(".aside");
const Menu = document.querySelector(".Menu");
const Menu_one = document.querySelector(".Menu_one");
const Menu_two = document.querySelector(".Menu_two");

wrapLayer.addEventListener("mouseover", function(){
    for(let i = 0; i < layers.length; i++){
        layers[i].classList.add("float");
    };
})

wrapLayer.addEventListener("mouseout", function(){
    for(let i = 0; i < layers.length; i++){
        layers[i].classList.remove("float");
    };
})

darkModeWrap.addEventListener("click", function(){
    for(let i = 0; i < darkMode.length; i++){
        darkMode[i].classList.toggle("active");
    };
    darkIcon.classList.toggle("active");
    if(darkIcon.classList.contains("active")){
        console.log("open")
        darkIcon.innerHTML = '<img src="moon.svg">'
    }
    else{
        console.log("close")
        darkIcon.innerHTML = '<img src="sun.svg">'
    }
})

Menu.addEventListener("click", function(){
     aside.classList.toggle("open");
     Menu.classList.toggle("open");    
     Menu_one.classList.toggle("open");    
     Menu_two.classList.toggle("open");    
})

