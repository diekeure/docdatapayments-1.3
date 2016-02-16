class Payment{

    idField;

    paymentMethodField;

    authorizationField;

    extendedField;

    anyField;

    get id() {
        return this.idField;
    }

    set id(value) {
        this.idField = value;
    }

    get paymentMethod() {
        return this.paymentMethodField;
    }

    set paymentMethod(value) {
        this.paymentMethodField = value;
    }

    get authorization() {
        return this.authorizationField;
    }

    set authorization(value) {
        this.authorizationField = value;
    }

    get extended() {
        return this.extendedField;
    }

    set extended(value) {
        this.extendedField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default Payment;