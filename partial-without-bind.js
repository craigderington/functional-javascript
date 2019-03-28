// coding: utf-8

var slice = Array.prototype.slice

    function logger(namespace) {
        return function () {
            console.log.apply(null, [namespace].concat(slice.call(arguments)));
        };
    }

    module.exports = logger


/*

Official Solution

var slice = Array.prototype.slice

    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }

    module.exports = logger

*/
