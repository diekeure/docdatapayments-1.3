class ItemLine{

    itemCodeField;

    quantityField;

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