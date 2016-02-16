class Invoice{

    totalNetAmountField;

    totalVatAmountField;

    itemField;

    shipToField;

    additionalDescriptionField;

    get totalNetAmount() {
        return this.totalNetAmountField;
    }

    set totalNetAmount(value) {
        this.totalNetAmountField = value;
    }

    get totalVatAmount() {
        return this.totalVatAmountField;
    }

    set totalVatAmount(value) {
        this.totalVatAmountField = value;
    }

    get item() {
        return this.itemField;
    }

    set item(value) {
        this.itemField = value;
    }

    get shipTo() {
        return this.shipToField;
    }

    set shipTo(value) {
        this.shipToField = value;
    }

    get additionalDescription() {
        return this.additionalDescriptionField;
    }

    set additionalDescription(value) {
        this.additionalDescriptionField = value;
    }
}


 export default Invoice;