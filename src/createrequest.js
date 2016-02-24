class CreateRequest {

    merchant = null;
    merchantOrderReference = 'test';
    paymentPreferences = null;
    menuPreferences = null;
    shopper = null;
    totalGrossAmount = null;
    billTo = null;
    description = null;
    receiptText = null;
    includeCosts = false;
    paymentRequest = null;
    invoice = null;
    integrationInfo = null;
    salesPerson = null;
    attributes = {
        'version': '1.3',
        'testExtensibility': false
    };

    constructor(merchant,merchantOrderReference,paymentPreferences,shopper,totalGrossAmount,billTo){
        if(merchant) this.merchant = merchant;
        if(merchantOrderReference) this.merchantOrderReference = merchantOrderReference;
        if(paymentPreferences) this.paymentPreferences = paymentPreferences;
        if(shopper) this.shopper = shopper;
        if(totalGrossAmount) this.totalGrossAmount = totalGrossAmount;
        if(billTo) this.billTo = billTo;
    }
}


 export default CreateRequest;