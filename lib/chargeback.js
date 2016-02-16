class Chargeback {

    var chargebackIdField;

    var statusField;

    var amountField;

    var reasonField;

    var enquiryReasonField;

    var anyField;

    get chargebackId() {
        return this.chargebackIdField;
    }

    set chargebackId(value) {
        this.chargebackIdField = value;
    }

    get status() {
        return this.statusField;
    }

    set status(value) {
        this.statusField = value;
    }

    get amount() {
        return this.amountField;
    }

    set amount(value) {
        this.amountField = value;
    }

    get reason() {
        return this.reasonField;
    }

    set reason(value) {
        this.reasonField = value;
    }

    get enquiryReason() {
        return this.enquiryReasonField;
    }

    set enquiryReason(value) {
        this.enquiryReasonField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default Chargeback;