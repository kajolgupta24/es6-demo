"use strict"

// promises represents operations that has not completed yet but expected to happen in future 

// immediate resolve..
let myPromise= Promise.resolve('foo');
myPromise.then((res)=>console.log(res));

let myPromise1= new Promise(function(resolve, reject)
{
setTimeout(()=>resolve(3),2000);
});

	myPromise1.then((res)=>
		{
 res +=3;

			console.log(res);
});

// fetch data from an API

function getData(method, url){

	return new Promise(function(resolve, reject){

var xhr = new XMLHttpRequest();
xhr.open(method, url);

xhr.onload=function(){
	if (this.status>=200 && this.status < 300){
		resolve(xhr.response);
	}
else{
	reject({
		status: this.status,
		statusText: xhr.statusText
	});

	}

};
xhr.onerror=function(){

	reject({
		status: this.status,
		statusText: xhr.statusText
	});

	};

xhr.send ();
});

}
getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data)
{
let todos= JSON.parse(data);
 var output='';
 for (let todo of todos){
output+= `
<li>
<p>title:${todo.title}<p>
<h1>completed:${todo.completed}<h1>
</li>
 `;
}
 document.getElementById('template').innerHTML= output;

}).catch(function(err){
	console.log(err);
})