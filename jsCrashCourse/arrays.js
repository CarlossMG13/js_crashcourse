//arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = new Array('apples', 'oranges', 'pears');
//shows the first index variable
console.log(fruits[1]);

//add values to the array
fruits[3] = 'grapes';
console.log(fruits)

//push method
fruits.push('mangos')
console.log(fruits)

//unshift method
fruits.unshift('strawberries')
console.log(fruits)

//pop method
fruits.pop()
console.log(fruits)

//indexOf - index of the value
console.log(fruits.indexOf('oranges'))

//There are bunch of other methods