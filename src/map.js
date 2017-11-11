"use strict"
//use of set ..
let myArr=[11, 12, 13];
let mySet =new Set(myArr);

mySet.add(50);
mySet.add(35);
mySet.add('206');
mySet.add({a:1, b:2});
console.log(mySet);// it will show whole set...

console.log(mySet.size);// it will give you no of elements..

mySet.forEach(function(val)
{
console.log(val);// it will iterate for each element...
})


//use of map 


let myMap =new Map([['a','hello'],['b', 'java']]);

myMap.set('c', 'great');


console.log(myMap);// it will show whole map...

console.log(myMap.size);// it will give you no of elements..

myMap.forEach(function(val)
{
console.log(val);// it will iterate for each element...
})


//weakmap 


let carWeakMap =new WeakMap;

let key1=
{
	id: 1
}

let car1=
{
	model: 'honda'
}

let key2=
{
	id: 2
}

let car2=
{
	model: 'civic'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);


console.log(carWeakMap);// it will show whole map...






