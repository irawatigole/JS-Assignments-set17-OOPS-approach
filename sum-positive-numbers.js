// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// 1. sumPos([1,-4,7,12]) returns 20

// 2. sumPos([]) returns 0

// Note: if there is nothing to sum, the sum is default to 0.

class Sum {
    constructor(arr) {
        this.arr = arr;
    }
    posSum() {
    
        let result = this.arr.reduce(function (a,n) {
            if (n > 0) {
                return a + n;
            } else {
                return a;
            }
        },0);
        return result;

    }
}
function sumPos(arr){
   let s = new Sum(arr);
   return s.posSum();
}
console.log(sumPos([1,-4,7,12]));
console.log(sumPos([]));