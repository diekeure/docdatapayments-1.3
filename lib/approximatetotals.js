class ApproximateTotals {

    var totalRegisteredField;

    var totalShopperPendingField;

    var totalAcquirerPendingField;

    var totalAcquirerApprovedField;

    var totalCapturedField;

    var totalRefundedField;

    var totalChargedbackField;

    var totalReversedField;

    var anyField;

    var exchangedToField;

    var exchangeRateDateField;

    get totalRegistered() {
        return this.totalRegisteredField;
    }

    set totalRegistered(value) {
        this.totalRegisteredField = value;
    }

    get totalShopperPending() {
        return this.totalShopperPendingField;
    }

    set totalShopperPending(value) {
        this.totalShopperPendingField = value;
    }

    get totalAcquirerPending() {
        return this.totalAcquirerPendingField;
    }

    set totalAcquirerPending(value) {
        this.totalAcquirerPendingField = value;
    }

    get totalAcquirerApproved() {
        return this.totalAcquirerApprovedField;
    }

    set totalAcquirerApproved(value) {
        this.totalAcquirerApprovedField = value;
    }

    get totalCaptured() {
        return this.totalCapturedField;
    }

    set totalCaptured(value) {
        this.totalCapturedField = value;
    }

    get totalRefunded() {
        return this.totalRefundedField;
    }

    set totalRefunded(value) {
        this.totalRefundedField = value;
    }

    get totalChargedback() {
        return this.totalChargedbackField;
    }

    set totalChargedback(value) {
        this.totalChargedbackField = value;
    }

    get totalReversed() {
        return this.totalReversedField;
    }

    set totalReversed(value) {
        this.totalReversedField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }

    get exchangedTo() {
        return this.exchangedToField;
    }

    set exchangedTo(value) {
        this.exchangedToField = value;
    }

    get exchangeRateDate() {
        return this.exchangeRateDateField;
    }

    set exchangeRateDate(value) {
        this.exchangeRateDateField = value;
    }
}


export default ApproximateTotals;