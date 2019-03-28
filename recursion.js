// coding: utf-8
// NodeSchool.io - Functional Javascript Workshop


function reduce(arr, fn, initial) {
    return (function reduceOnce (idx, prev) {
        if (idx >= arr.length) {
            return prev;
        }
        return reduceOnce (idx + 1, fn(prev, arr[idx], idx, arr));
    }(0, initial));      
}

module.exports = reduce


/* 
Official Solution


function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }

    module.exports = reduce

*/
