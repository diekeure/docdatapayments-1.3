class ProceedRequest {

    var merchantField;

    var paymentIdField;

    var itemField;

    var integrationInfoField;

    var versionField;

    var testExtensibilityField;

    function proceedRequest() {
        this.versionField = decimal(1.3);
        this.testExtensibilityField = false;

    }

    get merchant() {
        return this.merchantField;
    }

    set merchant(value) {
        this.merchantField = value;
    }

    get paymentId() {
        return this.paymentIdField;
    }

    set paymentId(value) {
        this.paymentIdField = value;
    }

    get Item() {
        return this.itemField;
    }

    set Item(value) {
        this.itemField = value;
    }

    get integrationInfo() {
        return this.integrationInfoField;
    }

    set integrationInfo(value) {
        this.integrationInfoField = value;
    }

    get version() {
        return this.versionField;
    }

    set version(value) {
        this.versionField = value;
    }

    get testExtensibility() {
        return this.testExtensibilityField;
    }

    set testExtensibility(value) {
        this.testExtensibilityField = value;
    }
}


export default ProceedRequest;