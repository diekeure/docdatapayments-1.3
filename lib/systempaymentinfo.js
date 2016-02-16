class SystemPaymentInfo {

    var shopperBankAccountField;

    var anyField;

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


export default SystemPaymentInfo;