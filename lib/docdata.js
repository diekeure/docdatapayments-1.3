'use strict';

var _createrequest = require('./createrequest');

var _createrequest2 = _interopRequireDefault(_createrequest);

var _merchant = require('./merchant');

var _merchant2 = _interopRequireDefault(_merchant);

var _shopperinfo = require('./shopperinfo');

var _shopperinfo2 = _interopRequireDefault(_shopperinfo);

var _cardtokeninput = require('./cardtokeninput');

var _cardtokeninput2 = _interopRequireDefault(_cardtokeninput);

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

var _sepabankaccount = require('./sepabankaccount');

var _sepabankaccount2 = _interopRequireDefault(_sepabankaccount);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

var _approximatetotals = require('./approximatetotals');

var _approximatetotals2 = _interopRequireDefault(_approximatetotals);

var _payment = require('./payment');

var _payment2 = _interopRequireDefault(_payment);

var _authorization = require('./authorization');

var _authorization2 = _interopRequireDefault(_authorization);

var _amount = require('./amount');

var _amount2 = _interopRequireDefault(_amount);

var _capture = require('./capture');

var _capture2 = _interopRequireDefault(_capture);

var _refund = require('./refund');

var _refund2 = _interopRequireDefault(_refund);

var _chargeback = require('./chargeback');

var _chargeback2 = _interopRequireDefault(_chargeback);

var _reversal = require('./reversal');

var _reversal2 = _interopRequireDefault(_reversal);

var _paymentinfo = require('./paymentinfo');

var _paymentinfo2 = _interopRequireDefault(_paymentinfo);

var _riskcheck = require('./riskcheck');

var _riskcheck2 = _interopRequireDefault(_riskcheck);

var _riskcheckcheck = require('./riskcheckcheck');

var _riskcheckcheck2 = _interopRequireDefault(_riskcheckcheck);

var _openinvoicepaymentinfo = require('./openinvoicepaymentinfo');

var _openinvoicepaymentinfo2 = _interopRequireDefault(_openinvoicepaymentinfo);

var _amexpaymentinfo = require('./amexpaymentinfo');

var _amexpaymentinfo2 = _interopRequireDefault(_amexpaymentinfo);

var _banktransferpaymentinfo = require('./banktransferpaymentinfo');

var _banktransferpaymentinfo2 = _interopRequireDefault(_banktransferpaymentinfo);

var _shopperbankaccount = require('./shopperbankaccount');

var _shopperbankaccount2 = _interopRequireDefault(_shopperbankaccount);

var _sofortpaymentinfo = require('./sofortpaymentinfo');

var _sofortpaymentinfo2 = _interopRequireDefault(_sofortpaymentinfo);

var _elvpaymentinfo = require('./elvpaymentinfo');

var _elvpaymentinfo2 = _interopRequireDefault(_elvpaymentinfo);

var _giftcardpaymentinfo = require('./giftcardpaymentinfo');

var _giftcardpaymentinfo2 = _interopRequireDefault(_giftcardpaymentinfo);

var _idealpaymentinfo = require('./idealpaymentinfo');

var _idealpaymentinfo2 = _interopRequireDefault(_idealpaymentinfo);

var _maestropaymentinfo = require('./maestropaymentinfo');

var _maestropaymentinfo2 = _interopRequireDefault(_maestropaymentinfo);

var _mastercardpaymentinfo = require('./mastercardpaymentinfo');

var _mastercardpaymentinfo2 = _interopRequireDefault(_mastercardpaymentinfo);

var _mistercashpaymentinfo = require('./mistercashpaymentinfo');

var _mistercashpaymentinfo2 = _interopRequireDefault(_mistercashpaymentinfo);

var _offlinepaymentinfo = require('./offlinepaymentinfo');

var _offlinepaymentinfo2 = _interopRequireDefault(_offlinepaymentinfo);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _pointofsalepaymentinfo = require('./pointofsalepaymentinfo');

var _pointofsalepaymentinfo2 = _interopRequireDefault(_pointofsalepaymentinfo);

var _pointofsalepaymentreceipt = require('./pointofsalepaymentreceipt');

var _pointofsalepaymentreceipt2 = _interopRequireDefault(_pointofsalepaymentreceipt);

var _pointofsalepaymentreceiptvaluesvalue = require('./pointofsalepaymentreceiptvaluesvalue');

var _pointofsalepaymentreceiptvaluesvalue2 = _interopRequireDefault(_pointofsalepaymentreceiptvaluesvalue);

var _sepadirectdebitpaymentinfo = require('./sepadirectdebitpaymentinfo');

var _sepadirectdebitpaymentinfo2 = _interopRequireDefault(_sepadirectdebitpaymentinfo);

var _systempaymentinfo = require('./systempaymentinfo');

var _systempaymentinfo2 = _interopRequireDefault(_systempaymentinfo);

var _visapaymentinfo = require('./visapaymentinfo');

var _visapaymentinfo2 = _interopRequireDefault(_visapaymentinfo);

var _consideredsafe = require('./consideredsafe');

var _consideredsafe2 = _interopRequireDefault(_consideredsafe);

var _paymentredirect = require('./paymentredirect');

var _paymentredirect2 = _interopRequireDefault(_paymentredirect);

var _parametersparameter = require('./parametersparameter');

var _parametersparameter2 = _interopRequireDefault(_parametersparameter);

var _idealpaymentinput = require('./idealpaymentinput');

var _idealpaymentinput2 = _interopRequireDefault(_idealpaymentinput);

var _elvpaymentinput = require('./elvpaymentinput');

var _elvpaymentinput2 = _interopRequireDefault(_elvpaymentinput);

var _offlinepaymentinput = require('./offlinepaymentinput');

var _offlinepaymentinput2 = _interopRequireDefault(_offlinepaymentinput);

var _pointofsalepaymentinput = require('./pointofsalepaymentinput');

var _pointofsalepaymentinput2 = _interopRequireDefault(_pointofsalepaymentinput);

var _banktransferpaymentinput = require('./banktransferpaymentinput');

var _banktransferpaymentinput2 = _interopRequireDefault(_banktransferpaymentinput);

var _directdebitpaymentinput = require('./directdebitpaymentinput');

var _directdebitpaymentinput2 = _interopRequireDefault(_directdebitpaymentinput);

var _cardpaymentinput = require('./cardpaymentinput');

var _cardpaymentinput2 = _interopRequireDefault(_cardpaymentinput);

var _expirydate = require('./expirydate');

var _expirydate2 = _interopRequireDefault(_expirydate);

var _paymentrequestinput = require('./paymentrequestinput');

var _paymentrequestinput2 = _interopRequireDefault(_paymentrequestinput);

var _itemline = require('./itemline');

var _itemline2 = _interopRequireDefault(_itemline);

var _refunditems = require('./refunditems');

var _refunditems2 = _interopRequireDefault(_refunditems);

var _refunditemsadditionalrefund = require('./refunditemsadditionalrefund');

var _refunditemsadditionalrefund2 = _interopRequireDefault(_refunditemsadditionalrefund);

var _salesperson = require('./salesperson');

var _salesperson2 = _interopRequireDefault(_salesperson);

var _name = require('./name');

var _name2 = _interopRequireDefault(_name);

var _technicalintegrationinfo = require('./technicalintegrationinfo');

var _technicalintegrationinfo2 = _interopRequireDefault(_technicalintegrationinfo);

var _vat = require('./vat');

var _vat2 = _interopRequireDefault(_vat);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _itemquantity = require('./itemquantity');

var _itemquantity2 = _interopRequireDefault(_itemquantity);

var _invoice = require('./invoice');

var _invoice2 = _interopRequireDefault(_invoice);

var _invoicetotalvatamount = require('./invoicetotalvatamount');

var _invoicetotalvatamount2 = _interopRequireDefault(_invoicetotalvatamount);

var _destination = require('./destination');

var _destination2 = _interopRequireDefault(_destination);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

var _paymentreference = require('./paymentreference');

var _paymentreference2 = _interopRequireDefault(_paymentreference);

var _paymentrequest = require('./paymentrequest');

var _paymentrequest2 = _interopRequireDefault(_paymentrequest);

var _language = require('./language');

var _language2 = _interopRequireDefault(_language);

var _shopper = require('./shopper');

var _shopper2 = _interopRequireDefault(_shopper);

var _menupreferences = require('./menupreferences');

var _menupreferences2 = _interopRequireDefault(_menupreferences);

var _menupreferencescss = require('./menupreferencescss');

var _menupreferencescss2 = _interopRequireDefault(_menupreferencescss);

var _exhortationperiod = require('./exhortationperiod');

var _exhortationperiod2 = _interopRequireDefault(_exhortationperiod);

var _paymentpreferences = require('./paymentpreferences');

var _paymentpreferences2 = _interopRequireDefault(_paymentpreferences);

var _paymentpreferencesexhortation = require('./paymentpreferencesexhortation');

var _paymentpreferencesexhortation2 = _interopRequireDefault(_paymentpreferencesexhortation);

var _refundrequest = require('./refundrequest');

var _refundrequest2 = _interopRequireDefault(_refundrequest);

var _cancelrequest = require('./cancelrequest');

var _cancelrequest2 = _interopRequireDefault(_cancelrequest);

var _startrequest = require('./startrequest');

var _startrequest2 = _interopRequireDefault(_startrequest);

var _proceedrequest = require('./proceedrequest');

var _proceedrequest2 = _interopRequireDefault(_proceedrequest);

var _capturerequest = require('./capturerequest');

var _capturerequest2 = _interopRequireDefault(_capturerequest);

var _statusrequest = require('./statusrequest');

var _statusrequest2 = _interopRequireDefault(_statusrequest);

var _extendedstatusrequest = require('./extendedstatusrequest');

var _extendedstatusrequest2 = _interopRequireDefault(_extendedstatusrequest);

var _listpaymentmethodsrequest = require('./listpaymentmethodsrequest');

var _listpaymentmethodsrequest2 = _interopRequireDefault(_listpaymentmethodsrequest);

var _cancelerrors = require('./cancelerrors');

var _cancelerrors2 = _interopRequireDefault(_cancelerrors);

var _captureerrors = require('./captureerrors');

var _captureerrors2 = _interopRequireDefault(_captureerrors);

var _createerrors = require('./createerrors');

var _createerrors2 = _interopRequireDefault(_createerrors);

var _listpaymentmethodserrors = require('./listpaymentmethodserrors');

var _listpaymentmethodserrors2 = _interopRequireDefault(_listpaymentmethodserrors);

var _paymentresponsepaymenterror = require('./paymentresponsepaymenterror');

var _paymentresponsepaymenterror2 = _interopRequireDefault(_paymentresponsepaymenterror);

var _proceederrors = require('./proceederrors');

var _proceederrors2 = _interopRequireDefault(_proceederrors);

var _refunderrors = require('./refunderrors');

var _refunderrors2 = _interopRequireDefault(_refunderrors);

var _starterrors = require('./starterrors');

var _starterrors2 = _interopRequireDefault(_starterrors);

var _statuserrors = require('./statuserrors');

var _statuserrors2 = _interopRequireDefault(_statuserrors);

var _soapclient = require('./soapclient');

var _soapclient2 = _interopRequireDefault(_soapclient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocdataPayments = {};
DocdataPayments.CreateRequest = _createrequest2.default;
DocdataPayments.Merchant = _merchant2.default;
DocdataPayments.ShopperInfo = _shopperinfo2.default;
DocdataPayments.CardTokenInput = _cardtokeninput2.default;
DocdataPayments.Token = _token2.default;
DocdataPayments.SepaBankAccount = _sepabankaccount2.default;
DocdataPayments.Country = _country2.default;
DocdataPayments.ApproximateTotals = _approximatetotals2.default;
DocdataPayments.Payment = _payment2.default;
DocdataPayments.Authorization = _authorization2.default;
DocdataPayments.Amount = _amount2.default;
DocdataPayments.Capture = _capture2.default;
DocdataPayments.Refund = _refund2.default;
DocdataPayments.Chargeback = _chargeback2.default;
DocdataPayments.Reversal = _reversal2.default;
DocdataPayments.PaymentInfo = _paymentinfo2.default;
DocdataPayments.RiskCheck = _riskcheck2.default;
DocdataPayments.RiskCheckCheck = _riskcheckcheck2.default;
DocdataPayments.OpenInvoicePaymentInfo = _openinvoicepaymentinfo2.default;
DocdataPayments.AmexPaymentInfo = _amexpaymentinfo2.default;
DocdataPayments.BankTransferPaymentInfo = _banktransferpaymentinfo2.default;
DocdataPayments.ShopperBankAccount = _shopperbankaccount2.default;
DocdataPayments.SofortPaymentInfo = _sofortpaymentinfo2.default;
DocdataPayments.ElvPaymentInfo = _elvpaymentinfo2.default;
DocdataPayments.GiftCardPaymentInfo = _giftcardpaymentinfo2.default;
DocdataPayments.IDealPaymentInfo = _idealpaymentinfo2.default;
DocdataPayments.MaestroPaymentInfo = _maestropaymentinfo2.default;
DocdataPayments.MasterCardPaymentInfo = _mastercardpaymentinfo2.default;
DocdataPayments.MisterCashPaymentInfo = _mistercashpaymentinfo2.default;
DocdataPayments.OfflinePaymentInfo = _offlinepaymentinfo2.default;
DocdataPayments.Register = _register2.default;
DocdataPayments.PointOfSalePaymentInfo = _pointofsalepaymentinfo2.default;
DocdataPayments.PointOfSalePaymentReceipt = _pointofsalepaymentreceipt2.default;
DocdataPayments.PointOfSalePaymentReceiptValuesValue = _pointofsalepaymentreceiptvaluesvalue2.default;
DocdataPayments.SepaDirectDebitPaymentInfo = _sepadirectdebitpaymentinfo2.default;
DocdataPayments.SystemPaymentInfo = _systempaymentinfo2.default;
DocdataPayments.VisaPaymentInfo = _visapaymentinfo2.default;
DocdataPayments.ConsideredSafe = _consideredsafe2.default;
DocdataPayments.PaymentRedirect = _paymentredirect2.default;
DocdataPayments.ParametersParameter = _parametersparameter2.default;
DocdataPayments.IDealPaymentInput = _idealpaymentinput2.default;
DocdataPayments.ElvPaymentInput = _elvpaymentinput2.default;
DocdataPayments.OfflinePaymentInput = _offlinepaymentinput2.default;
DocdataPayments.PointOfSalePaymentInput = _pointofsalepaymentinput2.default;
DocdataPayments.BankTransferPaymentInput = _banktransferpaymentinput2.default;
DocdataPayments.DirectDebitPaymentInput = _directdebitpaymentinput2.default;
DocdataPayments.CardPaymentInput = _cardpaymentinput2.default;
DocdataPayments.ExpiryDate = _expirydate2.default;
DocdataPayments.PaymentRequestInput = _paymentrequestinput2.default;
DocdataPayments.ItemLine = _itemline2.default;
DocdataPayments.RefundItems = _refunditems2.default;
DocdataPayments.RefundItemsAdditionalRefund = _refunditemsadditionalrefund2.default;
DocdataPayments.SalesPerson = _salesperson2.default;
DocdataPayments.Name = _name2.default;
DocdataPayments.TechnicalIntegrationInfo = _technicalintegrationinfo2.default;
DocdataPayments.Vat = _vat2.default;
DocdataPayments.Item = _item2.default;
DocdataPayments.ItemQuantity = _itemquantity2.default;
DocdataPayments.Invoice = _invoice2.default;
DocdataPayments.InvoiceTotalVatAmount = _invoicetotalvatamount2.default;
DocdataPayments.Destination = _destination2.default;
DocdataPayments.Address = _address2.default;
DocdataPayments.PaymentReference = _paymentreference2.default;
DocdataPayments.PaymentRequest = _paymentrequest2.default;
DocdataPayments.Language = _language2.default;
DocdataPayments.Shopper = _shopper2.default;
DocdataPayments.MenuPreferences = _menupreferences2.default;
DocdataPayments.MenuPreferencesCss = _menupreferencescss2.default;
DocdataPayments.ExhortationPeriod = _exhortationperiod2.default;
DocdataPayments.PaymentPreferences = _paymentpreferences2.default;
DocdataPayments.PaymentPreferencesExhortation = _paymentpreferencesexhortation2.default;
DocdataPayments.RefundRequest = _refundrequest2.default;
DocdataPayments.CancelRequest = _cancelrequest2.default;
DocdataPayments.StartRequest = _startrequest2.default;
DocdataPayments.ProceedRequest = _proceedrequest2.default;
DocdataPayments.CaptureRequest = _capturerequest2.default;
DocdataPayments.StatusRequest = _statusrequest2.default;
DocdataPayments.ExtendedStatusRequest = _extendedstatusrequest2.default;
DocdataPayments.ListPaymentMethodsRequest = _listpaymentmethodsrequest2.default;
DocdataPayments.CancelErrors = _cancelerrors2.default;
DocdataPayments.CaptureErrors = _captureerrors2.default;
DocdataPayments.CreateErrors = _createerrors2.default;
DocdataPayments.ListPaymentMethodsErrors = _listpaymentmethodserrors2.default;
DocdataPayments.PaymentResponsePaymentError = _paymentresponsepaymenterror2.default;
DocdataPayments.ProceedErrors = _proceederrors2.default;
DocdataPayments.RefundErrors = _refunderrors2.default;
DocdataPayments.StartErrors = _starterrors2.default;
DocdataPayments.StatusErrors = _statuserrors2.default;
DocdataPayments.SoapClient = _soapclient2.default;
DocdataPayments.SoapClient = _soapclient2.default;

module.exports = DocdataPayments;