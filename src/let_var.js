// lets run them with let_var.html and try checking outputs on console...
// how var works globally with if 
"use strict"

 function testVar(){
  var  a=30;
  if (true)
  {
  	var a =50;
  	console.log(a); //50

}

console.log (a); //50 because now value of a is 50 so it will persist 50 only ...

 }
 testVar();

//how let works on block level with if
 function testLet(){
  let  a=30;
  if (true)
  {
  	let a =50;
  	console.log(a); // 50

  }

console.log (a); //30  because let just works with block level....
 }

testLet();

// try removing comment how var works globally with for 

/*for ( var i=0; i<10; i++)
{
	console.log(i); // it will run from 0 to 9 
}


console.log(i); // 10 because it will return incremented value of i from 9 t0 10 ..... */

//how let works on block level with for 

for ( let i=0; i<10; i++)
{
	console.log(i); // it will run from 0 to 9 
}


console.log(i);// undefined because i will be uninitialized for this ...



