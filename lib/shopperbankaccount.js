class ShopperBankAccount{

    ibanField;

    bicField;

    anyField;

    get iban() {
        return this.ibanField;
    }

    set iban(value) {
        this.ibanField = value;
    }

    get bic() {
        return this.bicField;
    }

    set bic(value) {
        this.bicField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


 export default ShopperBankAccount;