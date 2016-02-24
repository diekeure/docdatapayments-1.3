class Name{

    prefix = null;
    initials = null;
    first = null;
    middle = null;
    last = null;
    suffix = null;

    constructor(prefix,initials,first,middle,last,suffix){
        if(prefix) this.prefix = prefix;
        if(initials) this.initials = initials;
        if(first) this.first = first;
        if(middle) this.middle = middle;
        if(last) this.last = last;
        if(suffix) this.suffix = suffix;
    }
}


 export default Name;