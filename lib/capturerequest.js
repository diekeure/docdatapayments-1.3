class CaptureRequest {

    var merchantField;

    var paymentIdField;

    var merchantCaptureReferenceField;

    var amountField;

    var itemCodeField;

    var descriptionField;

    var finalCaptureField;

    var finalCaptureFieldSpecified;

    var cancelReservedField;

    var cancelReservedFieldSpecified;

    var requiredCaptureDateField;

    var requiredCaptureDateFieldSpecified;

    var integrationInfoField;

    var versionField;

    var testExtensibilityField;

    function captureRequest() {
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

    get merchantCaptureReference() {
        return this.merchantCaptureReferenceField;
    }

    set merchantCaptureReference(value) {
        this.merchantCaptureReferenceField = value;
    }

    get amount() {
        return this.amountField;
    }

    set amount(value) {
        this.amountField = value;
    }

    get itemCode() {
        return this.itemCodeField;
    }

    set itemCode(value) {
        this.itemCodeField = value;
    }

    get description() {
        return this.descriptionField;
    }

    set description(value) {
        this.descriptionField = value;
    }

    get finalCapture() {
        return this.finalCaptureField;
    }

    set finalCapture(value) {
        this.finalCaptureField = value;
    }

    get finalCaptureSpecified() {
        return this.finalCaptureFieldSpecified;
    }

    set finalCaptureSpecified(value) {
        this.finalCaptureFieldSpecified = value;
    }

    get cancelReserved() {
        return this.cancelReservedField;
    }

    set cancelReserved(value) {
        this.cancelReservedField = value;
    }

    get cancelReservedSpecified() {
        return this.cancelReservedFieldSpecified;
    }

    set cancelReservedSpecified(value) {
        this.cancelReservedFieldSpecified = value;
    }

    get requiredCaptureDate() {
        return this.requiredCaptureDateField;
    }

    set requiredCaptureDate(value) {
        this.requiredCaptureDateField = value;
    }

    get requiredCaptureDateSpecified() {
        return this.requiredCaptureDateFieldSpecified;
    }

    set requiredCaptureDateSpecified(value) {
        this.requiredCaptureDateFieldSpecified = value;
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


export default CaptureRequest;