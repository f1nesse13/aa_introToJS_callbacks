class Clock {
  constructor() {
    this.time = new Date();
    this.hours = this.time.getHours();
    this.minutes = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
    this.printTime();
    setInterval(() => {
      this._tick()
    }, 1000);
  }

  printTime() {
    console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`)
  }

  _tick() {
    if (this.seconds === 59) {
      if (this.minutes === 59) {
        if (this.hours === 23) {
          this.hours = 0
          this.minutes = 0
          this.seconds = 0
        }
        this.hours += 1
        this.minutes = 0
        this.seconds = 0
      }
      this.minutes += 1
      this.seconds = 0
    } else {
      this.seconds += 1
    }
    console.clear();
    this.printTime();
  }
}
console.clear();
const time = new Clock();

