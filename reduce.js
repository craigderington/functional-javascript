// coding: utf-8
// NodeSchool.io - Functional Javascript Workshop


function countWords(inputWords) {
      var result = {};
      inputWords.reduce(function (prev, current, idx, arr) {
          if (!result[current]) {
              result[current] = 1;
          } else {
                result[current]++;
          }
          return current;
      }, null);
      return result;
    }

    module.exports = countWords


/*
Official Solution

function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords

*/
