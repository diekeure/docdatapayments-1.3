class SofortPaymentInfo {

    var issuerIdField;

    var shopperBankAccountField;

    var anyField;

    get issuerId() {
        return this.issuerIdField;
    }

    set issuerId(value) {
        this.issuerIdField = value;
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


export default SofortPaymentInfo;