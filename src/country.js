class Country {

    attributes = {
        'code': ''
    };

    constructor(code){
        if(code) this.code = code;

    }

    get code(){
        return this.attributes.code;
    }

    set code(val){
        this.attributes.code = val.toUpperCase();
    }
}

export default Country;