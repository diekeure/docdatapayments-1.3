class PaymentReference{

    itemField;

    itemElementNameField;

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


 export default PaymentReference;