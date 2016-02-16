class Refund{

    merchantRefundIdField;

    statusField;

    amountField;

    reasonField;

    anyField;

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