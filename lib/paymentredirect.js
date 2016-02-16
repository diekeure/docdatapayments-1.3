class PaymentRedirect{

    methodField;

    urlField;

    parametersField;

    anyField;

    get method() {
        return this.methodField;
    }

    set method(value) {
        this.methodField = value;
    }

    get url() {
        return this.urlField;
    }

    set url(value) {
        this.urlField = value;
    }

    get parameters() {
        return this.parametersField;
    }

    set parameters(value) {
        this.parametersField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default PaymentRedirect;