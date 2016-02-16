class Refund {

    var merchantRefundIdField;

    var statusField;

    var amountField;

    var reasonField;

    var anyField;

    get merchantRefundId() {
        return this.merchantRefundIdField;
    }

    set merchantRefundId(value) {
        this.merchantRefundIdField = value;
    }

    get status() {
        return this.statusField;
    }

    set status(value) {
        this.statusField = value;
    }

    get amount() {
        return this.amountField;
    }

    set amount(value) {
        this.amountField = value;
    }

    get reason() {
        return this.reasonField;
    }

    set reason(value) {
        this.reasonField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default Refund;