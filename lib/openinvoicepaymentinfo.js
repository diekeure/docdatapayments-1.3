class OpenInvoicePaymentInfo {

    var invoiceNumberField;

    var reservationNumberField;

    var anyField;

    get invoiceNumber() {
        return this.invoiceNumberField;
    }

    set invoiceNumber(value) {
        this.invoiceNumberField = value;
    }

    get reservationNumber() {
        return this.reservationNumberField;
    }

    set reservationNumber(value) {
        this.reservationNumberField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default OpenInvoicePaymentInfo;