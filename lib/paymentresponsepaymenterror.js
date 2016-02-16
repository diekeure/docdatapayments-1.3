class PaymentResponsePaymentError{

    errorField;

    statusField;

    idField;

    anyField;

    get error() {
        return this.errorField;
    }

    set error(value) {
        this.errorField = value;
    }

    get status() {
        return this.statusField;
    }

    set status(value) {
        this.statusField = value;
    }

    get id() {
        return this.idField;
    }

    set id(value) {
        this.idField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default PaymentResponsePaymentError;