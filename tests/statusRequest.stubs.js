import Config from './config';
import Merchant from '../lib/merchant';
import CreateRequest from '../lib/createrequest';
import StatusRequest from '../lib/statusrequest';

var uuid = require('node-uuid');

module.exports = {
    getStatusRequestWithKey: function(validKey){
        let request = new StatusRequest();
        request.paymentOrderKey = validKey;
        request.merchant = new Merchant(Config.merchant.name, Config.merchant.password);
        return request;
    }
};