class RefundRequest {

    var merchantField;

    var paymentIdField;

    var merchantRefundReferenceField;

    var itemsField;

    var itemsElementNameField;

    var cancelReservedField;

    var cancelReservedFieldSpecified;

    var requiredRefundDateField;

    var requiredRefundDateFieldSpecified;

    var refundBankAccountField;

    var integrationInfoField;

    var versionField;

    var testExtensibilityField;

    function refundRequest() {
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

    get merchantRefundReference() {
        return this.merchantRefundReferenceField;
    }

    set merchantRefundReference(value) {
        this.merchantRefundReferenceField = value;
    }

    get Items() {
        return this.itemsField;
    }

    set Items(value) {
        this.itemsField = value;
    }

    get ItemsElementName() {
        return this.itemsElementNameField;
    }

    set ItemsElementName(value) {
        this.itemsElementNameField = value;
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

    get requiredRefundDate() {
        return this.requiredRefundDateField;
    }

    set requiredRefundDate(value) {
        this.requiredRefundDateField = value;
    }

    get requiredRefundDateSpecified() {
        return this.requiredRefundDateFieldSpecified;
    }

    set requiredRefundDateSpecified(value) {
        this.requiredRefundDateFieldSpecified = value;
    }

    get refundBankAccount() {
        return this.refundBankAccountField;
    }

    set refundBankAccount(value) {
        this.refundBankAccountField = value;
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


export default RefundRequest;