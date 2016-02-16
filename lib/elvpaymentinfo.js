class ElvPaymentInfo{

    bankCodeField;

    bankAccountNumberField;

    shopperBankAccountField;

    anyField;

    get bankCode() {
        return this.bankCodeField;
    }

    set bankCode(value) {
        this.bankCodeField = value;
    }

    get bankAccountNumber() {
        return this.bankAccountNumberField;
    }

    set bankAccountNumber(value) {
        this.bankAccountNumberField = value;
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


 export default ElvPaymentInfo;