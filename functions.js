// coding: utf-8


// strings

function eat (food) {
  return food + ' tasted really good.';
}

console.log(eat('bananas'));	



// square a number
function square (num) {return num * num;}
var x = square(12);
console.log(x);

// arrays in functions
function myFunc(obj) {
  obj.make = 'Toyota';
}

var myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998
}

var c, y;
c = myCar.make;

myFunc(myCar);
y = myCar.make;
console.log(c, y);


// factorials
var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));


// function maps
function map (f, a) {
    var result = [], i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

var f = function(x) {
    return x * x * x;
}

var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
console.log(cube);