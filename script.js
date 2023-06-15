function getComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'rock';
    if (comp >= 0.34 && comp < 0.67) return 'scissors';
    return 'paper'
}

function getResult(comp, player) {
    if (player == comp) return 'DRAW';
    if (player == 'rock') return (comp == 'scissors') ? 'WIN' : 'LOSE';
    if (player == 'paper') return (comp == 'scissors') ? 'LOSE' : 'WIN';
    if (player == 'scissors') return (comp == 'rock') ? 'LOSE' : 'WIN';
}

function shuffle() {
    const imgComp = document.querySelector('.img-komputer');
    const img = ['rock', 'paper', 'scissors'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + img[i++] + '.jpg');
        if (i == img.length) i = 0;
    }, 100);
}

function countResult(array) {
    let winCount = 0;
    let drawCount = 0;
    let loseCount = 0;

    array.forEach(function(e) {
        if (e === 'WIN') winCount++
            if (e === 'DRAW') drawCount++
                if (e === 'LOSE') loseCount++
    });

    return {
        win: winCount,
        draw: drawCount,
        lose: loseCount
    };
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultDisplay = document.querySelector('.info');
const history = document.querySelector('.history');
const comImg = document.querySelector('.img-komputer');

//CARA - 2
const option = document.querySelectorAll('li img');
const hasil = [];

option.forEach(function(opt) {
    opt.addEventListener('click', function() {
        const comp = getComputer();

        shuffle();

        setTimeout(function() {
            comImg.setAttribute('src', 'img/' + comp + '.jpg');

            const txtResult = getResult(comp, opt.className);
            resultDisplay.innerHTML = txtResult;

            hasil.push(txtResult);
            const countHistory = countResult(hasil);

            history.innerHTML = 'WIN : ' + countHistory.win + ' | DRAW : ' + countHistory.draw + ' | LOSE : ' + countHistory.lose;
        }, 1000);
    });
});
//end CARA - 2


// CARA - 1
// rock.addEventListener('click', function() {
//     const player = 'rock';
//     const comp = getComputer();

//     comImg.removeAttribute('src');
//     comImg.setAttribute('src', 'img/' + comp + '.jpg');

//     const txtResult = getResult(comp, player);
//     resultDisplay.innerHTML = txtResult;
// });

// paper.addEventListener('click', function() {
//     const player = 'paper';
//     const comp = getComputer();

//     comImg.removeAttribute('src');
//     comImg.setAttribute('src', 'img/' + comp + '.jpg');

//     const txtResult = getResult(comp, player);
//     resultDisplay.innerHTML = txtResult;
// });

// scissors.addEventListener('click', function() {
//     const player = 'scissors';
//     const comp = getComputer();

//     comImg.removeAttribute('src');
//     comImg.setAttribute('src', 'img/' + comp + '.jpg');

//     const txtResult = getResult(comp, player);
//     resultDisplay.innerHTML = txtResult;
// });
//end CARA - 1