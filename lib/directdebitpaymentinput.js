class DirectDebitPaymentInput{

    holderNameField;

    bicField;

    ibanField;

    get holderName() {
        return this.holderNameField;
    }

    set holderName(value) {
        this.holderNameField = value;
    }

    get bic() {
        return this.bicField;
    }

    set bic(value) {
        this.bicField = value;
    }

    get iban() {
        return this.ibanField;
    }

    set iban(value) {
        this.ibanField = value;
    }
}


 export default DirectDebitPaymentInput;