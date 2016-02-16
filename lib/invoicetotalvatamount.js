class InvoiceTotalVatAmount extends amount {

    var rateField;

    get rate() {
        return this.rateField;
    }

    set rate(value) {
        this.rateField = value;
    }
}


export default InvoiceTotalVatAmount;