class Name {

    var prefixField;

    var initialsField;

    var firstField;

    var middleField;

    var lastField;

    var suffixField;

    get prefix() {
        return this.prefixField;
    }

    set prefix(value) {
        this.prefixField = value;
    }

    get initials() {
        return this.initialsField;
    }

    set initials(value) {
        this.initialsField = value;
    }

    get first() {
        return this.firstField;
    }

    set first(value) {
        this.firstField = value;
    }

    get middle() {
        return this.middleField;
    }

    set middle(value) {
        this.middleField = value;
    }

    get last() {
        return this.lastField;
    }

    set last(value) {
        this.lastField = value;
    }

    get suffix() {
        return this.suffixField;
    }

    set suffix(value) {
        this.suffixField = value;
    }
}


export default Name;