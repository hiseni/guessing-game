class GuessingGame {
    // We can set an initial range using constructor params
    constructor(min = 0, max = 0) {
        this.setRange(min, max);
    }

    setRange(min, max) {
        // We only deal with safe integers, nobody will think of floats :D
        if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
            throw new RangeError('Parameters must be safe integers');
        }

        // Ah-ha, no breaking ranges!
        if (min > max) {
            [ min, max ] = [ max, min ];
        }

        this.min = min;
        this.max = max;

        // We are not guessing yet
        this.answer = 0;
    }

    guess() {
        this.answer = Math.round((this.min + this.max) / 2);

        return this.answer;
    }

    lower() {
        this.max = this.answer;
    }

    greater() {
        this.min = this.answer;
    }
}

module.exports = GuessingGame;
