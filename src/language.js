class Language {
    attributes = {
        'code': ''
    };

    constructor(code) {
        if (code) this.code = code;
    }

    get code() {
        return this.attributes.code;
    }

    set code(value) {
        this.attributes.code = value;
    }
}


export default Language;