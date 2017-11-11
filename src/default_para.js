 " use  strict"
//use of default parameters

 function greet ($greetings='hello')
 
 {
 	console.log($greetings);

 }

 greet();

 // we can use default parameters by directly passing it onto our function declaration..in ES5 it is more complaicated 


 /* use of spraed operator , it is represented by (...) and it allows expressions to expanded where multiple 
 arguments are expected */

 let args=[1,2, 3];
 function test()
 {
 	console.log(args);

 }
test.apply(null,args);// in ES5 we have to explicitly use apply method but in ES6 we can use spread operators
test(...args);