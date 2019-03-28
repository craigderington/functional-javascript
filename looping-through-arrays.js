var pets = ['cat', 'dog', 'rat'];
for (i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);


// looping using a forEach
var cars = ['Audi', 'BMW', 'Mercedes', 'Toyota', 'Honda', 'Acura', 'Ford']
cars.forEach(function (c) {
  console.log(c);
})
