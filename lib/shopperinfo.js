class ShopperInfo {

    var shopperIpField;

    var browserAcceptField;

    var browserUserAgentField;

    get shopperIp() {
        return this.shopperIpField;
    }

    set shopperIp(value) {
        this.shopperIpField = value;
    }

    get browserAccept() {
        return this.browserAcceptField;
    }

    set browserAccept(value) {
        this.browserAcceptField = value;
    }

    get browserUserAgent() {
        return this.browserUserAgentField;
    }

    set browserUserAgent(value) {
        this.browserUserAgentField = value;
    }
}


export default ShopperInfo;