// coding: utf-8
// NodeSchool.io Functional Javascript Workshop

function repeat(fn, num) {
    if (num <= 0) {
        return;
    }
    fn();
    return repeat(fn, --num);
}
// es5 vs es6 module.exports = repeat
export default repeat;

/*
Official Solution

function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    module.exports = repeat

*/

function repeat(fn, num) {
    if (num === 0) return;
    fn()
    return repeat(fn, --num);
}

export default repeat;

