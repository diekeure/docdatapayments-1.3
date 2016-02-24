class Amount{

    attributes = {
        'currency': 'EUR'
    };
    $value;

    constructor(value, currency){
        if(value) this.value = value;
        if(currency) this.currency = currency;
    }
}


 export default Amount;