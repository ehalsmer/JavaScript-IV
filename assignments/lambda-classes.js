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
    changeGrade(student){
        let sign = Math.random() < 0.5 ? -1 : 1;
        let change = sign * (Math.floor(Math.random()*10)); // Since Math.random generates a value between 0 and 1, we multiply by 10 and take floor to get an integer between 0 and 10. We then multiply by the sign (-1 or 1) which we calculated above. 
        student.grade += change;
        return `${student.name}'s grade changed by ${change} and is now ${student.grade}.`
    }
};

    // Project Manger Class
    class ProjectManager extends Instructor {
        constructor(pmAttributes){
            super(pmAttributes);
            this.gradClassName = pmAttributes.gradClassName;
            this.favInstructor = pmAttributes.favInstructor;
        };
        standUp(slackChannel){
            return `${this.name} announces to ${slackChannel}, @channel standup times!`;
        };
        debugsCode(student, subject){
            return `${this.name} debugs ${student.name}'s code on ${subject}.`;
        };
    };

// Student Class

class Student extends Person {
    constructor(studAttributes){
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
        this.grade = studAttributes.grade;
    };
    listsSubjects(){ // this function is meant to list out the student's favorite subjects, one by one
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.` // or student.name?
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    };
};

const emily = new Person({
    name: 'Emily',
    age: '32',
    location: 'Lafayette, Indiana'
})

const george = new Instructor({
    name: 'George',
    age: 64,
    location: 'California',
    specialty: 'category theory',
    favLanguage: 'haskell',
    catchPhrase: "Let's make a lambda"
});

const alice = new Student({
    name: 'Alice',
    age: '25',
    location: 'Oregon',
    previousBackground: 'poet',
    className: 'Web20',
    favSubjects: ['react', 'algorithms', 'knitting', 'english literature'],
    grade: 89
});

const eleanor = new ProjectManager({
    name: 'Eleanor',
    age: 27,
    location: 'Pennsylvania',
    specialty: 'design',
    favLanguage: 'Javascript',
    catchPhrase: "Have you tried Less?",
    gradClassName: "Web19",
    favInstructor: "Dan Levy"
})

console.log(alice);
console.log(alice.speak()); // method inherited from Person class
alice.listsSubjects(); // see console output, or line 70

console.log(eleanor);

console.log(eleanor.standUp('Web21'));
console.log(eleanor.debugsCode(alice, 'prototypal inheritance'))

console.log(george.grade(alice, 'Algebra'));
console.log(george.changeGrade(alice));
console.log(george.changeGrade(alice));
console.log(george.changeGrade(alice));
console.log(george.changeGrade(alice));
console.log(george.changeGrade(alice));
console.log(george.changeGrade(alice));

console.log(george);
console.log(george.speak());
console.log(george.demo('functors'));


console.log(emily);
console.log(emily.speak());
