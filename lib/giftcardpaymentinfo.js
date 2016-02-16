class GiftCardPaymentInfo {

    var giftCardNumberField;

    var balanceField;

    var anyField;

    get giftCardNumber() {
        return this.giftCardNumberField;
    }

    set giftCardNumber(value) {
        this.giftCardNumberField = value;
    }

    get balance() {
        return this.balanceField;
    }

    set balance(value) {
        this.balanceField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default GiftCardPaymentInfo;