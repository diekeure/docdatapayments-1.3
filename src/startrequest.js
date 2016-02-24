class StartRequest{

    merchant = null;
    paymentOrderKey = null;
    paymentAmount = null;
    items = null;
    integrationInfo = null;
    attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
}


 export default StartRequest;