// It's the academic year's end, a fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// Test Case

// 1. findMean([15,15,20,15]) returns 16

// 2. findMean([15,15,17]) returns 15

// note - should be achieved using either loop or iterators

class Mean {
    constructor(arr) {
        this.arr = arr;
    }
    meanFind() {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];      
          
        }
        return (Math.floor(sum / this.arr.length));
       
    }
}
function findMean(arr){
   let m = new Mean(arr)   
    return m.meanFind();
}
console.log(findMean([15,15,20,15]));
console.log(findMean([15,15,17]));