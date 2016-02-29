import Country from './country';

class Address{

    company;
    kvkNummer;
    vatNumber;
    careOf;
    street;
    houseNumber;
    houseNumberAddition;
    postalCode;
    city;
    state;
    country;

    constructor(street, houseNumber, city, postalCode, country){
        if(street) this.street = street;
        if(houseNumber) this.houseNumber = houseNumber;
        if(postalCode) this.postalCode = postalCode;
        if(city) this.city = city;
        if(country) this.country = country;
    }
}

export default Address;