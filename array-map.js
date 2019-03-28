// coding: utf-8
// functional-javascript-workshop 
// Exercise - Array Map


function doubleAll(numbers) {
    var result = numbers.map(x => x * 2);
    //console.log(result);
    return result;
}

module.exports = doubleAll;


/* 
Official Solution

module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

*/
