class Amount{

    attributes = {
        'currency': 'EUR'
    };
    $value;

    constructor(value, currency){
        if(value) this.$value = value;
        if(currency) this.currency = currency;
    }

    get value(){
        return this.$value;
    }

    set value(val){
        this.$value = val;
    }

    get currency(){
        return this.attributes.currency;
    }

    set currency(val){
        this.attributes.currency = val;
    }

}


 export default Amount;