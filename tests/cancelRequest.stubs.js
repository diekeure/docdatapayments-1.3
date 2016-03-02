import Config from './config';
import Merchant from '../lib/merchant';
import CancelRequest from '../lib/cancelrequest';

module.exports = {
    getCancelRequestWithKey: function(validKey){
        let request = new CancelRequest();
        request.paymentOrderKey = validKey;
        request.merchant = new Merchant(Config.merchant.name, Config.merchant.password);

        return request;
    }
};