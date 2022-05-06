const wrapLayer = document.querySelector(".wrap");
const layers = document.querySelectorAll(".move");
const darkMode = document.querySelectorAll(".dark");
const darkModeWrap = document.querySelector(".dark_wrap");
const darkIcon = document.querySelector(".icon3");

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
