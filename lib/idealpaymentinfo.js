class IDealPaymentInfo{

    issuerIdField;

    holderNameField;

    shopperBankAccountField;

    anyField;

    get issuerId() {
        return this.issuerIdField;
    }

    set issuerId(value) {
        this.issuerIdField = value;
    }

    get holderName() {
        return this.holderNameField;
    }

    set holderName(value) {
        this.holderNameField = value;
    }

    get shopperBankAccount() {
        return this.shopperBankAccountField;
    }

    set shopperBankAccount(value) {
        this.shopperBankAccountField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default IDealPaymentInfo;