class Capture {

    var merchantCaptureIdField;

    var statusField;

    var amountField;

    var reasonField;

    var anyField;

    get merchantCaptureId() {
        return this.merchantCaptureIdField;
    }

    set merchantCaptureId(value) {
        this.merchantCaptureIdField = value;
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


export default Capture;