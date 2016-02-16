class PaymentResponse{

    paymentSuccessField;

    paymentInsufficientDataField;

    paymentErrorField;

    anyField;

    get paymentSuccess() {
        return this.paymentSuccessField;
    }

    set paymentSuccess(value) {
        this.paymentSuccessField = value;
    }

    get paymentInsufficientData() {
        return this.paymentInsufficientDataField;
    }

    set paymentInsufficientData(value) {
        this.paymentInsufficientDataField = value;
    }

    get paymentError() {
        return this.paymentErrorField;
    }

    set paymentError(value) {
        this.paymentErrorField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default PaymentResponse;