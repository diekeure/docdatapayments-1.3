class ElvPaymentInput{

    accountNumberField;

    bankCodeField;

    get accountNumber() {
        return this.accountNumberField;
    }

    set accountNumber(value) {
        this.accountNumberField = value;
    }

    get bankCode() {
        return this.bankCodeField;
    }

    set bankCode(value) {
        this.bankCodeField = value;
    }
}


 export default ElvPaymentInput;