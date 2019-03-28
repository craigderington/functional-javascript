// coding: utf-8
// NodeSchool.io Functional Javascript Workshop

function repeat(fn, num) {
    setTimeout(function walk () {
        if (num <= 0) {
            return;
        }
        fn();
        return repeat(fn, --num);
    })
}

module.exports = repeat;



/*
Official Solution

function repeat(operation, num) {
      if (num <= 0) return

      operation()

      // release control every 10 or so
      // iterations.
      // 10 is arbitrary.
      if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
    }

    module.exports = repeat
*/

