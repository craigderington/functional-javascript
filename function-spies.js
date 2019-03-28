// coding: utf-8


function spy(target, method) {
    let original = target[method]
    let c = { count: 0 }
    
    target[method] = function() {
        c.count++;
        return original.apply(this, arguments)
    }
    return c
}

module.exports = spy


/*

Official Solution

function Spy(target, method) {
      var originalFunction = target[method]

      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }

      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }

      return result
    }

    module.exports = Spy

*/
