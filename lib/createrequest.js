class CreateRequest {

    var merchantField;

    var merchantOrderReferenceField;

    var paymentPreferencesField;

    var menuPreferencesField;

    var shopperField;

    var totalGrossAmountField;

    var billToField;

    var descriptionField;

    var receiptTextField;

    var includeCostsField;

    var paymentRequestField;

    var invoiceField;

    var integrationInfoField;

    var salesPersonField;

    var versionField;

    var testExtensibilityField;

    function createRequest() {
        this.includeCostsField = false;
        this.versionField = decimal(1.3);
        this.testExtensibilityField = false;

    }

    get merchant() {
        return this.merchantField;
    }

    set merchant(value) {
        this.merchantField = value;
    }

    get merchantOrderReference() {
        return this.merchantOrderReferenceField;
    }

    set merchantOrderReference(value) {
        this.merchantOrderReferenceField = value;
    }

    get paymentPreferences() {
        return this.paymentPreferencesField;
    }

    set paymentPreferences(value) {
        this.paymentPreferencesField = value;
    }

    get menuPreferences() {
        return this.menuPreferencesField;
    }

    set menuPreferences(value) {
        this.menuPreferencesField = value;
    }

    get shopper() {
        return this.shopperField;
    }

    set shopper(value) {
        this.shopperField = value;
    }

    get totalGrossAmount() {
        return this.totalGrossAmountField;
    }

    set totalGrossAmount(value) {
        this.totalGrossAmountField = value;
    }

    get billTo() {
        return this.billToField;
    }

    set billTo(value) {
        this.billToField = value;
    }

    get description() {
        return this.descriptionField;
    }

    set description(value) {
        this.descriptionField = value;
    }

    get receiptText() {
        return this.receiptTextField;
    }

    set receiptText(value) {
        this.receiptTextField = value;
    }

    get includeCosts() {
        return this.includeCostsField;
    }

    set includeCosts(value) {
        this.includeCostsField = value;
    }

    get paymentRequest() {
        return this.paymentRequestField;
    }

    set paymentRequest(value) {
        this.paymentRequestField = value;
    }

    get invoice() {
        return this.invoiceField;
    }

    set invoice(value) {
        this.invoiceField = value;
    }

    get integrationInfo() {
        return this.integrationInfoField;
    }

    set integrationInfo(value) {
        this.integrationInfoField = value;
    }

    get salesPerson() {
        return this.salesPersonField;
    }

    set salesPerson(value) {
        this.salesPersonField = value;
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


export default CreateRequest;