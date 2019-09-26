class GuessingGame {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.ceil((this.max + this.min) / 2);
  }

  lower() {
    let temp = Math.ceil((this.max + this.min) / 2);
    this.max = temp;
  }

  greater() {
    let temp = Math.ceil((this.max + this.min) / 2);
    this.min = temp;
  }
}

module.exports = GuessingGame;
