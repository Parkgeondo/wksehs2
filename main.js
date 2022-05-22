const para = document.getElementById("para1");
const paraBox = document.querySelector(".h1para");
const parallaxBox = document.querySelector(".parallax");
const sectionA = document.querySelector(".flexable-Image");
const sectionABox = document.querySelector(".wide-Able-Image");
const images = document.querySelectorAll("figure");


animate(para);

// 움직이는 글씨 효과 - 글씨와 부모 글씨의 넓이를 가지고 마진값을 조절함
function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
  
    setInterval(() => {
        // flag값을 1일씩 줄여가면서 마진값을 더 낮은 음수로 만듬
        element.style.marginLeft = --flag + "px";
        // flag값이 넓이의 반만큼 왔으면
        if (elementWidth/2 <= -flag) {
            // 처음으로 다시 돌림
            flag = 25;
        }
        // 프레임
    }, 20);
}

//맨위 이미지 패럴렉스
document.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallaxBox.style.backgroundPositionY = offset * 0.18 + "px";
})
//아래 이미지 패럴렉스
document.addEventListener("scroll", function(){
    images.forEach(image => {
        let sectionBTop = image.getBoundingClientRect().top;
        let sectionBMid = sectionBTop + image.getBoundingClientRect().height/2;
        let windowH = window.innerHeight;
        let height = windowH - sectionBMid- 800;
        image.style.backgroundPositionY = height * 0.1 + "px";
      })
})

// document.addEventListener("scroll", function(){
//     let sectionATop = sectionA.getBoundingClientRect().top;
//     let sectionAMid = sectionATop + sectionA.getBoundingClientRect().height/2;
//     let windowMid = window.innerHeight/2;
//     if((windowMid - sectionAMid) > -10){
//         sectionA.classList.add("wide")
//     }else{
//         sectionA.classList.remove("wide")
//     }
// })

//중간이미지 넓게 하기
document.addEventListener("scroll", function(){
    let sectionATop = sectionA.getBoundingClientRect().top;
    let sectionAMid = sectionATop + sectionA.getBoundingClientRect().height/2 + 140;
    let windowMid = window.innerHeight/2;
    let gap = windowMid - sectionAMid
    if(gap > -500 && gap < 0 ){
        const sectionGap = sectionAMid - windowMid;
        const sectionGapminus = 500 - sectionGap;
        const percentage = sectionGap/500;
        const percentageminus = 1 - percentage;
        sectionA.style.width = `${50 + percentageminus*50}%`
        console.log(gap);
    }else if(gap >= 0){
        sectionA.style.width = `${100}%`
    }else if(gap < -500){
        sectionA.style.width = `${50}%`
    }
})

const sectionB = document.querySelector(".two");
const p1 = document.getElementById("para2");
const p2 = document.getElementById("para3");

//아래 글씨 움직이기
document.addEventListener("scroll", function(){
    // let sectionBTop = sectionB.getBoundingClientRect().top;
    // let sectionBMid = sectionBTop + sectionB.getBoundingClientRect().height/2;
    // let windowMid = window.innerHeight/2;
    // let line = windowMid - sectionBMid;
    let sectionBTop = sectionB.getBoundingClientRect().top;
    let sectionBMid = sectionBTop + sectionB.getBoundingClientRect().height/2;
    let windowMid = window.innerHeight;
    let line = windowMid - sectionBMid + 120;
    console.log(line);
    if(line > -100 && line < 1300 ){
        p1.style.marginLeft = -line/4 + "px";
        p2.style.marginLeft = -2000+line/4 + "px";
    }else if(line >= 0){
    }else if(line < -500){
    }
})