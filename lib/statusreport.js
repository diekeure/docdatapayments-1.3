class StatusReport {

    var approximateTotalsField;

    var paymentField;

    var consideredSafeField;

    var anyField;

    get approximateTotals() {
        return this.approximateTotalsField;
    }

    set approximateTotals(value) {
        this.approximateTotalsField = value;
    }

    get payment() {
        return this.paymentField;
    }

    set payment(value) {
        this.paymentField = value;
    }

    get consideredSafe() {
        return this.consideredSafeField;
    }

    set consideredSafe(value) {
        this.consideredSafeField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default StatusReport;