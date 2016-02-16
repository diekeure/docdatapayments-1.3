class SepaDirectDebitPaymentInfo{

    bicField;

    ibanField;

    countryField;

    mandateNumberField;

    anyField;

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

    get country() {
        return this.countryField;
    }

    set country(value) {
        this.countryField = value;
    }

    get mandateNumber() {
        return this.mandateNumberField;
    }

    set mandateNumber(value) {
        this.mandateNumberField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default SepaDirectDebitPaymentInfo;