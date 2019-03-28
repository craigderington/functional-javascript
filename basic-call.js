// coding: utf-8
// NodeSchool.io - Functional Javascript Workshop
// Basic Calls


function duckCount() {
    if (arguments.length <=0) { 
        return 0;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var remaining_args = duckCount.apply(null, args);
    return (Object.prototype.hasOwnProperty.call(arguments[0], 'quack') ? 1 : 0) + remaining_args
}

module.exports = duckCount;


/*

Official Solution

function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    module.exports = duckCount

*/
