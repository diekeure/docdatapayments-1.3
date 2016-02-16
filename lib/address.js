class Address {

    var companyField;

    var kvkNummerField;

    var vatNumberField;

    var careOfField;

    var streetField;

    var houseNumberField;

    var houseNumberAdditionField;

    var postalCodeField;

    var cityField;

    var stateField;

    var countryField;

    get company() {
        return this.companyField;
    }

    set company(value) {
        this.companyField = value;
    }

    get kvkNummer() {
        return this.kvkNummerField;
    }

    set kvkNummer(value) {
        this.kvkNummerField = value;
    }

    get vatNumber() {
        return this.vatNumberField;
    }

    set vatNumber(value) {
        this.vatNumberField = value;
    }

    get careOf() {
        return this.careOfField;
    }

    set careOf(value) {
        this.careOfField = value;
    }

    get street() {
        return this.streetField;
    }

    set street(value) {
        this.streetField = value;
    }

    get houseNumber() {
        return this.houseNumberField;
    }

    set houseNumber(value) {
        this.houseNumberField = value;
    }

    get houseNumberAddition() {
        return this.houseNumberAdditionField;
    }

    set houseNumberAddition(value) {
        this.houseNumberAdditionField = value;
    }

    get postalCode() {
        return this.postalCodeField;
    }

    set postalCode(value) {
        this.postalCodeField = value;
    }

    get city() {
        return this.cityField;
    }

    set city(value) {
        this.cityField = value;
    }

    get state() {
        return this.stateField;
    }

    set state(value) {
        this.stateField = value;
    }

    get country() {
        return this.countryField;
    }

    set country(value) {
        this.countryField = value;
    }
}


export default Address;