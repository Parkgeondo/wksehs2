let number = 1;

const principles = [
  {
    detail:"견고하게 뻩은 스틸 다리와 부드럽게 곡선으로 안아주는 형태의 등받이로 디자인에 전체적인 조화를 더했습니다. 주방,카페,라운지 등 어떤 공간에서도 감각적인 연출을 해보세요."
  },
  {
    detail:"부드러운 곡선형 등/좌판 디자인과 감각적인 철제 다리의 조화로 어떤 거실과 매칭을 해도 세련된 분위기를 연출해줍니다. 다리 하부에는 PP캡으로 마감되어 바닥면을 보호하면서 소음을 방지해줍니다."
  },
  {
    detail:"캐시미어처럼 따뜻하고 부드러움 패브릭 마감과 3중 베이스의 소프트 설계 구조로 완성된 포근함으로 하루종일 아늑한 나만의 거실 라이프를 만나보세요."
  }
]

//오른쪽버튼
const rightTag = document.querySelector("button.right");
//왼쪽버튼
const leftTag = document.querySelector("button.left");
//가구설명
const furniture = document.querySelector("figure.furniture-image figcaption");
//가구 이미지
const furnitureImage = document.querySelector("figure.furniture-image img");
//설명창
const modal = document.querySelector("figcaption.modal");
//CTA 버튼
const button = document.querySelector("div.cursor");
//number_1
const n1 = document.querySelector("div.number_1");
//number_2
const n2 = document.querySelector("div.number_2");
//number_3
const n3 = document.querySelector("div.number_3");


rightTag.addEventListener("click", function() {
  number++;

  if(number >= 4){
    number = 1;
  }

  furnitureImage.src = `pngwing_${number}.png`
  furniture.innerHTML = principles[number-1].detail;
  modal.style.display = 'none';
});


leftTag.addEventListener("click", function() {
  number--;

  if(number <= 0){
    number = 3;
  }
  furnitureImage.src = `pngwing_${number}.png`
  furniture.innerHTML = principles[number-1].detail;
  modal.style.display = 'none';
});

button.addEventListener("click", function(){
  modal.style.display = 'block';
});

button.addEventListener("click", function(){
  modal.style.display = 'block';
});


var canvas;
let speed; 
let balls = [{
    x: 200,
    y: 1,
    speedX: 0.6,
    speedY: 0
  },
  {
    x: 1620,
    y: 400,
    speedX: 0.6,
    speedY: 0
  },
  {
    x: 1000,
    y: -30,
    speedX: 0.6,
    speedY: 0
  },
  {
    x: 10,
    y: 900,
    speedX: 0.6,
    speedY: 0
  },
  {
    x: 800,
    y: 700,
    speedX: 0.6,
    speedY: 0
  }
]

let size = 500;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(251);
  stroke(246);
  strokeWeight(140);
  fill(251);
  for (i = 0; i < 5; i++) {
    ellipse(balls[i].x, balls[i].y, size);
  }
  for (i = 0; i < 5; i++) {
    balls[i].x = balls[i].x + balls[i].speedX;
    balls[i].y = balls[i].y + balls[i].speedY;
  }
  for (i = 0; i < 5; i++) {
    if (balls[i].x - size / 2 - 80 > width) {
      balls[i].x = -200;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}