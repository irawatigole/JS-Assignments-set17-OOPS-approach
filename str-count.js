// Body:

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z') // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

 class Count {
     constructor(str, ele) {
         this.str = str;
         this.ele = ele;
     }
     countStr() {      
        let count = 0;
        for (let i = 0; i< this.str.length; i++){
            if (this.str[i] == this.ele) {
                count ++;
        }
        }
        return count;
     }
 }
function strCount(str,ele){
    let c = new Count(str,ele)
    return c.countStr();
}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));