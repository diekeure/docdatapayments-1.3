class Authorization {

    var statusField;

    var reasonField;

    var amountField;

    var confidenceLevelField;

    var captureField;

    var refundField;

    var chargebackField;

    var reversalField;

    var anyField;

    get status() {
        return this.statusField;
    }

    set status(value) {
        this.statusField = value;
    }

    get reason() {
        return this.reasonField;
    }

    set reason(value) {
        this.reasonField = value;
    }

    get amount() {
        return this.amountField;
    }

    set amount(value) {
        this.amountField = value;
    }

    get confidenceLevel() {
        return this.confidenceLevelField;
    }

    set confidenceLevel(value) {
        this.confidenceLevelField = value;
    }

    get capture() {
        return this.captureField;
    }

    set capture(value) {
        this.captureField = value;
    }

    get refund() {
        return this.refundField;
    }

    set refund(value) {
        this.refundField = value;
    }

    get chargeback() {
        return this.chargebackField;
    }

    set chargeback(value) {
        this.chargebackField = value;
    }

    get reversal() {
        return this.reversalField;
    }

    set reversal(value) {
        this.reversalField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default Authorization;