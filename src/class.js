"user strict"
// use of class and inheritance 
class User {

	constructor(email, username, password)
	{
		this.email= email;
		this.username=username;
		this.password=password;
	}


// use of static method

static countUsers()	{

	console.log('there are 50 users');
}

 register ()
{
	console.log(this.username +' is now registered');
}
}

let bob= new User ('bob@gmail.com','bob','12544234');
bob.register();
User.countUsers();


// inheritance 
class Member extends User {
	constructor(email, username, password , memberpackage){
 super (email, username, password);
 this.package=memberpackage;


	}
getPackage()
{
	console.log(this.username+' is registered for this '+this.package);
}
}

let john= new Member('john@gmail.com', 'john', '738647384','super');
john.getPackage();

john.register();// calling parent class method


