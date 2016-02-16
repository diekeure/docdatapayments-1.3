class RefundItems{

    additionalRefundField;

    itemLineField;

    get additionalRefund() {
        return this.additionalRefundField;
    }

    set additionalRefund(value) {
        this.additionalRefundField = value;
    }

    get itemLine() {
        return this.itemLineField;
    }

    set itemLine(value) {
        this.itemLineField = value;
    }
}


 export default RefundItems;