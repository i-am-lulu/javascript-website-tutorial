const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let rotateValue = circle.style.transform;
// console.log(rotateValue);
let rotateSum = "";

upBtn.addEventListener('click', () => {
    // 時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})

downBtn.addEventListener('click', () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})

// upBtn.onclick = function() {
//     rotateSum = rotateValue + "rotate(-90deg)";
//     circle.style.transform = rotateSum;
// }