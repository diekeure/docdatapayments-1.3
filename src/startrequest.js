class StartRequest{

    merchant = null;
    paymentOrderKey = null;
    paymentAmount = null;
    recurringPaymentRequest = null;
    payment = null;
    token = null;
    returnUrl = null;
    shopperInfo = null;
    integrationInfo = null;
    attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
}


 export default StartRequest;