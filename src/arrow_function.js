"use strict"
// arrow function saves some of the few key strokes and binds this lexically...
/*function prefixer(prefix)
{
	this.prefix=prefix;

}

prefixer.prototype.prefixArray=function(arr)
{
	return arr.map(function(x)
	{
console.log (this.prefix + x);
	});
}

let p= new prefixer('hello');
p.prefixArray(['kajol','priya']);
// Cannot read property 'prefix' of undefined
*/
// we can fix this by using another variable 
function prefixer(prefix)
{
	this.prefix=prefix;

}

prefixer.prototype.prefixArray=function(arr)
{

	let that =this;
	return arr.map(function(x)
	{
console.log (that.prefix + x);
	});
}

let p= new prefixer('hello');
p.prefixArray(['kajol','priya']);


// we can use this by using arrow function



function prefixer(prefix)
{
	this.prefix=prefix;

}

prefixer.prototype.prefixArray=function(arr)
{

	
	return arr.map((x)=>
	{
console.log (this.prefix + x);
	});
}

let q= new prefixer('hello');
q.prefixArray(['kajol','priya']);

// another example of arrow function


var add=(a,b)=>
{
	var sum=a+b;
	console.log(sum);
	return false;
}

add(2,2);