class CardPaymentInput {

    var itemsField;

    var itemsElementNameField;

    get Items() {
        return this.itemsField;
    }

    set Items(value) {
        this.itemsField = value;
    }

    get ItemsElementName() {
        return this.itemsElementNameField;
    }

    set ItemsElementName(value) {
        this.itemsElementNameField = value;
    }
}


export default CardPaymentInput;