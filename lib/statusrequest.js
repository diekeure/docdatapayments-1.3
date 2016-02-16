class StatusRequest {

    var merchantField;

    var paymentOrderKeyField;

    var integrationInfoField;

    var versionField;

    var testExtensibilityField;

    function statusRequest() {
        this.versionField = decimal(1.3);
        this.testExtensibilityField = false;

    }

    get merchant() {
        return this.merchantField;
    }

    set merchant(value) {
        this.merchantField = value;
    }

    get paymentOrderKey() {
        return this.paymentOrderKeyField;
    }

    set paymentOrderKey(value) {
        this.paymentOrderKeyField = value;
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


export default StatusRequest;