class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.middle = Math.round ((this.minValue + this.maxValue) / 2);
        return this.middle;
    }

    lower() {
        this.maxValue = this.middle;
    }

    greater() {
        this.minValue = this.middle;
    }
}

module.exports = GuessingGame;
