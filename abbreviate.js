// Write a function to convert a name into initials. This program strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// abbreviate('Sam Harris') returns  'S.H'

// abbreviate('Patrick Feeney') returns 'P.F'

class ShortForm {
    constructor(str) {
        this.str = str;
    }
    initials() {
        var initial = this.str.split(' ');
        return `${initial[0].charAt(0)}.${initial[1].charAt(0)}`;
    }
}

function abbreviate(str) {
    if (str.length == 0){
        return '';
    }
    let s = new ShortForm(str);
    return s.initials();
}

console.log(abbreviate('Sam Harris'));
console.log(abbreviate('Patrick Feeney'));