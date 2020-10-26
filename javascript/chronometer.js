class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++;
      callback();
    }, 10);
  }
  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  getMilliSeconds() {
    return Math.floor(this.currentTime % 100);
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    let milliSecs = this.twoDigitsNumber(this.getMilliSeconds());
    return `${mins}:${secs}:${milliSecs}`;
  }
}
