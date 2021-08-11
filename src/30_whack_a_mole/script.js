// Whoever Looking This I apologise for the poor coding practice!
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let min = 200;
let max = 1000;
let stopped = true;
let t;
let ath = document.querySelector('.ath');

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(min, max);
    console.log(min, max);
    const hole = randomHole(holes);
    hole.classList.add('up');
    t = setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    console.log(this);
    if (this.textContent == "start") {
        scoreBoard.textContent = 0;
        timeUp = false;
        stopped = false;
        score = 0;
        peep();
        this.textContent = "stop";
    }
    else if (this.textContent == "stop") {
        score = 0;
        scoreBoard.textContent = 0;
        holes.forEach(hole => hole.classList.remove('up'));
        timeUp = true;
        stopped = true;
        let athl = localStorage.getItem('ath', score);
        console.log(score, athl);
        if (score > parseInt(athl) || athl == null) {
            console.log('hi');
            localStorage.setItem('ath', score);
            ath.textContent = `All Time High: ${score}`;
        }
        document.querySelector('.pause').textContent = "pause";
        this.textContent = "start";
    }
    // setTimeout(() => {
    //     timeUp = true;
    // }, 10000);
}

function bonk(e) {
    console.log(e);
    if (!e.isTrusted) return;
    score++;
    let athl = localStorage.getItem('ath', score);
    if (score > parseInt(athl) || athl == null) {
        localStorage.setItem('ath', score);
        ath.textContent = `All Time High: ${score}`;
    }
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

function changeLevel() {
    currentLevel.textContent = `Current Level: ${this.textContent}`;
    if (this.textContent == 'easy') {
        return;
    }
    else if (this.textContent == 'medium') {
        min = 150;
        max = 750;
    }
    else {
        min = 100;
        max = 500;
    }
}

function pauseGame() {
    holes.forEach(hole => hole.classList.remove('up'));
    if (this.textContent == "pause" && !stopped) {
        clearTimeout(t);
        this.textContent = "continue";
    }
    else if (this.textContent == "continue") {
        console.log('hii');
        this.textContent = "pause";
        peep();
    }
}

let currentLevel = document.querySelector('.current-level');
currentLevel.textContent = `Current Level: easy`;
let levels = document.querySelectorAll('.levels > *');
levels.forEach(level => level.addEventListener('click', changeLevel));
moles.forEach(mole => mole.addEventListener('click', bonk));
window.onload = () => {
    ath.textContent = `All Time High: ${localStorage.getItem('ath')}`;
}
document.querySelector('.init').addEventListener('click', startGame);
document.querySelector('.pause').addEventListener('click', pauseGame);