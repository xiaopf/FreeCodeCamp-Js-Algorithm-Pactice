var Person = function(firstAndLast) {
     
    this.firstName1=firstAndLast.split(' ')[0];
	this.lastName1=firstAndLast.split(' ')[1];
	this.fullName=this.firstName1+' '+this.lastName1;

    this.getFirstName=function(){return this.firstName1;};
    this.getLastName=function(){return this.lastName1;};
    this.getFullName=function(){return this.firstName1+' '+this.lastName1;};

};

Person.prototype.setFirstName=function(first){this.firstName1=first;};
Person.prototype.setLastName=function(last){this.lastName1=last;};
Person.prototype.setFullName=function(firstAndLast){
    this.firstName1=firstAndLast.split(' ')[0];
	this.lastName1=firstAndLast.split(' ')[1];
	this.fullName1=firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
