import Name from './name';

class Shopper{

    name = null;
    email = null;
    language = null;
    gender = null;
    dateOfBirth = null;
    phoneNumber = null;
    mobilePhoneNumber = null;
    ipAddress = null;
    attributes = {
        'id': null
    };

    constructor(id, name, email, language, gender, dateOfBirth, phoneNumber, mobilePhoneNumber, ipAddress) {
        if(name) this.name = name;
        if(email) this.email = email;
        if(language) this.language = language;
        if(gender) this.gender = gender;
        if(dateOfBirth) this.setDateOfBirth(dateOfBirth);
        if(phoneNumber) this.phoneNumber = phoneNumber;
        if(mobilePhoneNumber) this.mobilePhoneNumber = mobilePhoneNumber;
        if(ipAddress) this.ipAddress = ipAddress;
        if(id) this.id = id;
    }

    setDateOfBirth(date){
        if(date instanceof Date){
            this.dateOfBirth = date.getFullYear() + '-' +
                ((date.getMonth()+1 < 10) ? '0' : '') + (date.getMonth()+1) + '-' +
                ((date.getDate() < 10) ? '0' : '') + date.getDate();
        } else {
            this.dateOfBirth = date;
        }
    }

    get id() {
        return this.attributes.id;
    }

    set id(val) {
        this.attributes.id = val;
    }
}


 export default Shopper;