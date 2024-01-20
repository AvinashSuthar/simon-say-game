let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let rIdx = Math.floor(Math.random() * 4);
    let rColor = btns[rIdx];
    let rbtn = document.querySelector(`.${rColor}`);
    gameSeq.push(rColor);
    flashBtn(rbtn);
}


function checkAns(idx) {
    // console.log(`Level : ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);            
        }

    }
    else{
        h3.innerHTML = `Game Over! <b> Your Score was ${level} </b> </br> Press any key to start.`
        reset();
    }
}

function btnPress() {
    // console.log("Btn was pressed");
    let btn = this;
    flashBtn(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    // console.log(userColor);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}