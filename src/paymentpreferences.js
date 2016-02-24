class PaymentPreferences{

    profile = null;
    numberOfDaysToPay = null;
    exhortation = null;
    terminalId = null;

    constructor(profile, numberOfDaysToPay, exhortation, terminalId){
        if(profile) this.profile = profile;
        if(numberOfDaysToPay) this.numberOfDaysToPay = numberOfDaysToPay;
        if(exhortation) this.exhortation = exhortation;
        if(terminalId) this.terminalId = terminalId;
    }

}


 export default PaymentPreferences;