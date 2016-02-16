class ItemQuantity {

    var unitOfMeasureField;

    var valueField;

    get unitOfMeasure() {
        return this.unitOfMeasureField;
    }

    set unitOfMeasure(value) {
        this.unitOfMeasureField = value;
    }

    get Value() {
        return this.valueField;
    }

    set Value(value) {
        this.valueField = value;
    }
}


export default ItemQuantity;