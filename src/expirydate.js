class ExpiryDate{
    attributes = {
        month: null,
        year: null
    }

    constructor(month, year){
        "use strict";
        this.month = month;
        this.year = year;
    }

    get month(){
        "use strict";
        return this.attributes.month;
    }

    set month(val){
        "use strict";
        this.attributes.month = val;
    }

    get year(){
        "use strict";
        return this.attributes.year;
    }

    set year(val){
        "use strict";
        this.attributes.year = val;
    }
}


 export default ExpiryDate;