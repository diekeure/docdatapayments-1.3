class Merchant{

    attributes = {
        'name': '',
        'password': ''
    };

    constructor(name, password){
        if(name) this.name = name;
        if(password) this.password = password;
    }

    get name() {
        return this.attributes.name;
    }

    set name(value) {
        this.attributes.name = value;
    }

    get password() {
        return this.attributes.password;
    }

    set password(value) {
        this.attributes.password = value;
    }
}


 export default Merchant;