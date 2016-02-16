class MisterCashPaymentInfo{

    cardHolderField;

    cardCountryField;

    panLast4Field;

    refusalReasonField;

    anyField;

    get cardHolder() {
        return this.cardHolderField;
    }

    set cardHolder(value) {
        this.cardHolderField = value;
    }

    get cardCountry() {
        return this.cardCountryField;
    }

    set cardCountry(value) {
        this.cardCountryField = value;
    }

    get panLast4() {
        return this.panLast4Field;
    }

    set panLast4(value) {
        this.panLast4Field = value;
    }

    get refusalReason() {
        return this.refusalReasonField;
    }

    set refusalReason(value) {
        this.refusalReasonField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default MisterCashPaymentInfo;