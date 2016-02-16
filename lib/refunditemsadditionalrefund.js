class RefundItemsAdditionalRefund {

    var additionalAmountField;

    var descriptionField;

    var vatRateField;

    get additionalAmount() {
        return this.additionalAmountField;
    }

    set additionalAmount(value) {
        this.additionalAmountField = value;
    }

    get description() {
        return this.descriptionField;
    }

    set description(value) {
        this.descriptionField = value;
    }

    get vatRate() {
        return this.vatRateField;
    }

    set vatRate(value) {
        this.vatRateField = value;
    }
}


export default RefundItemsAdditionalRefund;