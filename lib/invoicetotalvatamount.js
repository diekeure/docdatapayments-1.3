class InvoiceTotalVatAmount extends amount {

    rateField;

    get rate() {
        return this.rateField;
    }

    set rate(value) {
        this.rateField = value;
    }
}


 export default InvoiceTotalVatAmount;