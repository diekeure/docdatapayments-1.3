class RiskCheckCheck{

    attributes = {
        'score': ''
    };
    $value;

    get score() {
        return this.attributes.score;
    }

    set score(value) {
        this.attributes.score = value;
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$value = value;
    }
}

export default RiskCheckCheck;