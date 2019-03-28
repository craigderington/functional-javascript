// coding: utf-8

module.exports = function (arr, fn) {
    return arr.reduce(function (prev, curr, i) {
        prev[i] = fn(curr)
        return prev
    }, [])
}



/*

Official Solution

module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
      }, [])
    }

*/
