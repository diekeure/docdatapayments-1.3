class PaymentInfo {

    var riskChecksField;

    var itemField;

    var itemElementNameField;

    var anyField;

    get riskChecks() {
        return this.riskChecksField;
    }

    set riskChecks(value) {
        this.riskChecksField = value;
    }

    get Item() {
        return this.itemField;
    }

    set Item(value) {
        this.itemField = value;
    }

    get ItemElementName() {
        return this.itemElementNameField;
    }

    set ItemElementName(value) {
        this.itemElementNameField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default PaymentInfo;