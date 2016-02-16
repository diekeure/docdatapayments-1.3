class PaymentPreferences {

    var profileField;

    var numberOfDaysToPayField;

    var exhortationField;

    var terminalIdField;

    get profile() {
        return this.profileField;
    }

    set profile(value) {
        this.profileField = value;
    }

    get numberOfDaysToPay() {
        return this.numberOfDaysToPayField;
    }

    set numberOfDaysToPay(value) {
        this.numberOfDaysToPayField = value;
    }

    get exhortation() {
        return this.exhortationField;
    }

    set exhortation(value) {
        this.exhortationField = value;
    }

    get terminalId() {
        return this.terminalIdField;
    }

    set terminalId(value) {
        this.terminalIdField = value;
    }
}


export default PaymentPreferences;