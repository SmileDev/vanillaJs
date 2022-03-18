const images = [
    "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg"
];

const bgImage = document.createElement("img");   

function getBgImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    //js에서 html에 요소 추가 방법(createElement/appendChild)
    bgImage.src = `img/${chosenImage}`;    
    // document.body.style.backgroundSize = "auto|length|cover|contain|intial|inherit"
    document.body.appendChild(bgImage);
}

getBgImage() //사이트가 열리자 마자 함수 실행 하게 한 뒤에
setInterval(getBgImage, 10000); //일정 간격으로 함수 실행 ( 10초 단위 )