// CODE here for your Lambda Classes

// Base Person Class

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    };
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

const emily = new Person({
    name: 'Emily',
    age: '32',
    location: 'Lafayette, Indiana'
})

console.log(emily);
console.log(emily.speak());

// Instructor Class

class Instructor extends Person {
    constructor(instAttributes){
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    };
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    };
};

const george = new Instructor({
    name: 'George',
    age: 64,
    location: 'California',
    specialty: 'category theory',
    favLanguage: 'haskell',
    catchPhrase: "Let's make a lambda"
});

console.log(george);
console.log(george.speak());
console.log(george.demo('functors'));
// console.log(george.grade('Emily', 'Algebra'));

    // Project Manger Class


// Student Class

class Student extends Person {
    
}