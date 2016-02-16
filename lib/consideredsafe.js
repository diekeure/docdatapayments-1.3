class ConsideredSafe {

    var dateField;

    var anyField;

    get date() {
        return this.dateField;
    }

    set date(value) {
        this.dateField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default ConsideredSafe;