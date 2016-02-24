class CaptureRequest{

    merchant = null;
    paymentId = null;
    merchantCaptureReference = null;
    amount = null;
    itemCode = null;
    description = null;
    finalCapture = null;
    finalCaptureFieldSpecified;
    cancelReserved = null;
    cancelReservedFieldSpecified;
    requiredCaptureDate = null;
    requiredCaptureDateFieldSpecified;
    integrationInfo = null;
    attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
}


 export default CaptureRequest;