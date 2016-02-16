class ProceedResponse{

    itemField;

    ddpXsdVersionField;

    get Item() {
        return this.itemField;
    }

    set Item(value) {
        this.itemField = value;
    }

    get ddpXsdVersion() {
        return this.ddpXsdVersionField;
    }

    set ddpXsdVersion(value) {
        this.ddpXsdVersionField = value;
    }
}


 export default ProceedResponse;