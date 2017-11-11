"use strict"
let template = '<h1>hello</h1>'+
'<p>this is a very simple template</p>';
document.getElementById('template').innerHTML= template;

//use of backtabs (`) to avoid string concateness
// we can even bind data with the template literals
let user='john'
let template1 = `<h1>hello , ${user}</h1>
<p>this is a very simple template</p>`;
document.getElementById('template1').innerHTML= template1;

// we can even bind functions
 function makeUpperCase(word)
 {
 	return word.toUpperCase();
 }

let template2 = `<h1>hello,${makeUpperCase('john')}</h1>
<p>this is a very simple template</p>`;
document.getElementById('template2').innerHTML= template2;


