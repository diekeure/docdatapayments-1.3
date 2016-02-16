class SepaBankAccount{

    holderNameField;

    holderCityField;

    holderCountryField;

    bicField;

    ibanField;

    get holderName() {
        return this.holderNameField;
    }

    set holderName(value) {
        this.holderNameField = value;
    }

    get holderCity() {
        return this.holderCityField;
    }

    set holderCity(value) {
        this.holderCityField = value;
    }

    get holderCountry() {
        return this.holderCountryField;
    }

    set holderCountry(value) {
        this.holderCountryField = value;
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
}


 export default SepaBankAccount;