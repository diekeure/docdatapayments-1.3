class CreateRequest {

    merchantField = null;
    merchantOrderReferenceField = null;
    paymentPreferencesField = null;
    menuPreferencesField = null;
    shopperField = null;
    totalGrossAmountField = null;
    billToField = null;
    descriptionField = null;
    receiptTextField = null;
    includeCostsField = false;
    paymentRequestField = null;
    invoiceField = null;
    integrationInfoField = null;
    salesPersonField = null;
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