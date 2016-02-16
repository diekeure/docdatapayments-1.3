class BankTransferPaymentInfo {

    var beneficiaryNameField;

    var beneficiaryCityField;

    var beneficiaryCountryField;

    var bankNameField;

    var bankCityField;

    var bankCodeField;

    var bankAccountNumberField;

    var bicField;

    var ibanField;

    var shopperBankAccountField;

    get beneficiaryName() {
        return this.beneficiaryNameField;
    }

    set beneficiaryName(value) {
        this.beneficiaryNameField = value;
    }

    get beneficiaryCity() {
        return this.beneficiaryCityField;
    }

    set beneficiaryCity(value) {
        this.beneficiaryCityField = value;
    }

    get beneficiaryCountry() {
        return this.beneficiaryCountryField;
    }

    set beneficiaryCountry(value) {
        this.beneficiaryCountryField = value;
    }

    get bankName() {
        return this.bankNameField;
    }

    set bankName(value) {
        this.bankNameField = value;
    }

    get bankCity() {
        return this.bankCityField;
    }

    set bankCity(value) {
        this.bankCityField = value;
    }

    get bankCode() {
        return this.bankCodeField;
    }

    set bankCode(value) {
        this.bankCodeField = value;
    }

    get bankAccountNumber() {
        return this.bankAccountNumberField;
    }

    set bankAccountNumber(value) {
        this.bankAccountNumberField = value;
    }

    get bic() {
        return this.bicField;
    }

    set bic(value) {
        this.bicField = value;
    }

    get iban() {
        return this.ibanField;
    }

    set iban(value) {
        this.ibanField = value;
    }

    get shopperBankAccount() {
        return this.shopperBankAccountField;
    }

    set shopperBankAccount(value) {
        this.shopperBankAccountField = value;
    }
}


export default BankTransferPaymentInfo;