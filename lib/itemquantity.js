class ItemQuantity{

    attributes = {
        unitOfMeasure: ""
    };
    $value;

    get unitOfMeasure() {
        return this.attributes.unitOfMeasure;
    }

    set unitOfMeasure(value) {
        this.attributes.unitOfMeasure = value;
    }
}


 export default ItemQuantity;