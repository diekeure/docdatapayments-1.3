class OfflinePaymentInput {

    var registerField;

    var methodField;

    get register() {
        return this.registerField;
    }

    set register(value) {
        this.registerField = value;
    }

    get method() {
        return this.methodField;
    }

    set method(value) {
        this.methodField = value;
    }
}


export default OfflinePaymentInput;