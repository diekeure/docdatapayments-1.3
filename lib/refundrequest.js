class RefundRequest{

    merchant = null;
    paymentId = null;
    merchantRefundReference = null;
    items = null;
    itemsElementName = null;
    cancelReserved = null;
    cancelReservedFieldSpecified;
    requiredRefundDate = null;
    requiredRefundDateFieldSpecified;
    refundBankAccount = null;
    integrationInfo = null;
    attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
}


 export default RefundRequest;