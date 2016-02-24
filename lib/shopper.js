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
    id = null;

    constructor(name, email, language, gender, dateOfBirth, phoneNumber, mobileNumber, ipAddress, id){
        if(name) this.name = name;
        if(email) this.email = email;
        if(language) this.language = language;
        if(gender) this.gender = gender;
        if(dateOfBirth) this.dateOfBirth = dateOfBirth;
        if(phoneNumber) this.phoneNumber = phoneNumber;
        if(mobileNumber) this.mobileNumber = mobileNumber;
        if(ipAddress) this.ipAddress = ipAddress;
        if(id) this.id = id;
    }
}


 export default Shopper;