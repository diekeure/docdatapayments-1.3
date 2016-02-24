class Error{

    attributes = {
        'code': ''
    };
    $value;

    get code() {
        return this.attributes.code;
    }

    set code(value) {
        this.attributes.code = value;
    }
}

export default Error;