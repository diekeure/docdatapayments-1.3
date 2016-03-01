import Config from './config';
import Merchant from '../lib/merchant';
import StartRequest from '../lib/statusrequest';
import Payment from '../lib/payment';
import BankTransferPaymentInput from '../lib/banktransferpaymentinput';

var uuid = require('node-uuid');

module.exports = {
    getStartRequestWithKey: function(validKey){
        let request = new StartRequest();
        request.paymentOrderKey = validKey;
        request.merchant = new Merchant(Config.merchant.name, Config.merchant.password);

        let payment = new Payment();
        payment.paymentMethod = 'BANK_TRANSFER';
        payment.bankTransferPaymentInput = new BankTransferPaymentInput();
        payment.bankTransferPaymentInput.emailAddress = Config.shopper.emailaddress;
        request.payment = payment;

        return request;
    }
};