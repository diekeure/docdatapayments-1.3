class ItemLine {

    var itemCodeField;

    var quantityField;

    get itemCode() {
        return this.itemCodeField;
    }

    set itemCode(value) {
        this.itemCodeField = value;
    }

    get quantity() {
        return this.quantityField;
    }

    set quantity(value) {
        this.quantityField = value;
    }
}


export default ItemLine;