var person = function(){}

person.prototype.initilize = function(name,age){
    this.name = name;
    this.age = age;
}


function teacher(name,age){
    // act as super class and set values in parent constructor
    person.call(name,age);

}

teacher.prototype.teach = function(subject){
    console.log(this.name + ' is teaching ' + subject);
}

//Inheriting teacher from person
Object.setPrototypeOf(teacher.prototype,person.prototype);


var him = new teacher();

him.initilize('adam',45);
him.teach('inheritance');