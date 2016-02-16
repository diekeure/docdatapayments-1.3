class ThreeDomainSecureAuthenticationResult {

    var mdField;

    var pAResField;

    var anyField;

    get MD() {
        return this.mdField;
    }

    set MD(value) {
        this.mdField = value;
    }

    get PARes() {
        return this.pAResField;
    }

    set PARes(value) {
        this.pAResField = value;
    }

    get Any() {
        return this.anyField;
    }

    set Any(value) {
        this.anyField = value;
    }
}


export default ThreeDomainSecureAuthenticationResult;