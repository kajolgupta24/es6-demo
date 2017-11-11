"use strict"

//use of generator
/* they are basically functions whom we can pause and resume and they yield the data
return back either pause  and resume...*/

function *g1()
{
	console.log('hello');
 yield 'run 1 ...';
	console.log('hi');

 yield 'run 2...';
return 'returned';
}


let g= g1();
console.log(g.next());
console.log(g.next());
console.log(g.next());



// use of iterator

/*
for ( let val of g)

{
	console.log(val);
}

*/