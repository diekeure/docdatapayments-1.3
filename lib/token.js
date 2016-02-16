class Token{

    itemField;

    itemElementNameField;

    keyField;

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

    get key() {
        return this.keyField;
    }

    set key(value) {
        this.keyField = value;
    }
}


 export default Token;