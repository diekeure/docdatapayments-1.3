import Config from './config';
import Shopper from '../lib/shopper';
import Name from '../lib/name';
import Language from '../lib/language';
import Merchant from '../lib/merchant';
import Country from '../lib/country';
import Address from '../lib/address';
import Amount from '../lib/amount';
import Destination from '../lib/destination';
import PaymentPreferences from '../lib/paymentpreferences';
import CreateRequest from '../lib/createrequest';

var uuid = require('node-uuid');

module.exports = {
    getValidCreateRequest: function(){
        //shoppper
        let name = new Name("Mr.", 'JD', 'John', '', 'Doe');
        let shopper = new Shopper(1, name, 'docdata@mailinator.com', new Language('en'), 'M', new Date(1984, 4, 11), '+31135327777', '+31416674111');

        //merchant
        let merchant = new Merchant(Config.merchant.name, Config.merchant.password);
        let merchantOrderReference = uuid.v1();
        let paymentPreferences = new PaymentPreferences(Config.paymentPreferences, 14);

        //amount
        let amount = new Amount(4000, 'EUR');
        let address = new Address('Main St', '123', 'AnyTown', '45678', new Country('us'));
        let billTo = new Destination(name, address);

        //assemble request
        let request = new CreateRequest(merchant,merchantOrderReference,paymentPreferences,shopper,amount,billTo);
        return request;
    }
};