class OfflinePaymentInfo{

    registerField;

    methodField;

    anyField;

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

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default OfflinePaymentInfo;