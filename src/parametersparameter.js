class ParametersParameter {

    attributes = {
        'name': ''
    };
    $value;

    get name() {
        return this.attributes.name;
    }

    set name(value) {
        this.attributes.name = value;
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$value = value;
    }
}


export default ParametersParameter;