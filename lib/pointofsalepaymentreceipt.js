class PointOfSalePaymentReceipt {

    var formattedReceiptField;

    var receiptValuesField;

    var anyField;

    var typeField;

    get formattedReceipt() {
        return this.formattedReceiptField;
    }

    set formattedReceipt(value) {
        this.formattedReceiptField = value;
    }

    get receiptValues() {
        return this.receiptValuesField;
    }

    set receiptValues(value) {
        this.receiptValuesField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }

    get type() {
        return this.typeField;
    }

    set type(value) {
        this.typeField = value;
    }
}


export default PointOfSalePaymentReceipt;