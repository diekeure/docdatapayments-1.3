class PaymentRequestInput{

    paymentMethodField;

    itemField;

    itemElementNameField;

    get paymentMethod() {
        return this.paymentMethodField;
    }

    set paymentMethod(value) {
        this.paymentMethodField = value;
    }

    get Item() {
        return this.itemField;
    }

    set Item(value) {
        this.itemField = value;
    }

    get ItemElementName() {
        return this.itemElementNameField;
    }

    set ItemElementName(value) {
        this.itemElementNameField = value;
    }
}


 export default PaymentRequestInput;