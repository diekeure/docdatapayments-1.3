import Country from './country';

class Address{

    company = null;
    kvkNummer = null;
    vatNumber = null;
    careOf= null;
    street = null;
    houseNumber= null;
    houseNumberAddition = null;
    postalCode = null;
    city = null;
    state = null;
    country = null;

    constructor(street, houseNumber, city, postalCode, country){
        if(street) this.street = street;
        if(houseNumber) this.houseNumber = houseNumber;
        if(postalCode) this.postalCode = postalCode;
        if(city) this.city = city;
        if(country) this.country = country;
    }
}

export default Address;