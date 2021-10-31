
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

const number = document.getElementById('number');
let initial = 0;

function Decrease(){
    number.innerHTML = initial -= 1;
    if(initial < 0){
        number.style.color = 'red';
    }
    else if(initial == 0){
        number.style.color = 'black';
    }
}

function Reset(){
    initial = null
    number.innerHTML = 0;
    number.style.color = 'black';
}
function Increase(){
    number.innerHTML = initial += 1;
    if(initial > 0){
        number.style.color = 'green';
    }
    else if(initial == 0){
        number.style.color = 'black';
    }
}




decreaseBtn.onclick = Decrease;
resetBtn.onclick = Reset;
increaseBtn.onclick = Increase; 