const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  let minutes = chronometer.twoDigitsNumber(printMinutes());
  let seconds = chronometer.twoDigitsNumber(printSeconds());
  let milliSeconds = chronometer.twoDigitsNumber(printMilliSeconds());
  minDec.innerHTML = `${minutes[0]}`;
  minUni.innerHTML = `${minutes[1]}`;
  secDec.innerHTML = `${seconds[0]}`;
  secUni.innerHTML = `${seconds[1]}`;
  milDec.innerHTML = `${milliSeconds[0]}`;
  milUni.innerHTML = `${milliSeconds[1]}`;
}

function printMinutes() {
  return `${chronometer.getMinutes()}`;
}

function printSeconds() {
  return `${chronometer.getSeconds()}`;
}

function printMilliSeconds() {
  return `${chronometer.getMilliSeconds()}`;
}

function printSplit() {
  let newSplit = document.createElement('li',);
  console.log(chronometer.splitClick())
  newSplit.innerHTML = `${chronometer.splitClick()}`;
  splits.appendChild(newSplit);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList[1] === 'start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList[1] === 'reset') {
    chronometer.resetClick();
    clearSplits()
    printTime(); 
  }
  if (btnRight.classList[1] === 'split') {
    printSplit();
  }
});
