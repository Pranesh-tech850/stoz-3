
console.log("************************************************Basic Level Tasks************************************************");

function Car(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;

    this.getCarInfo = function () {
        return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    };
}

let car1 = new Car("Toyota", 2020, "Red");

console.log("Car Models Informations")

console.log(car1.getCarInfo());

console.log("Primitive String");

const str1 = "Hello, World!";
console.log(str1);
console.log(typeof str1);


console.log("String Object");

const str2 = new String("Hello, World!");
console.log(str2);
console.log(typeof str2);


console.log("***********Primitive Number***********");

const num1 = 42;
console.log(num1);
console.log(typeof num1);

console.log("*********Number Object*********");

const num2 = new Number(42);
console.log(num2);
console.log(typeof num2);

console.log("***********Primitive Function***********");

const greetigs = function greet()
{
    console.log("Hello, World!");
}

greetigs();

console.log("***********Function Object***********");
const greetingsObj = new Function("console.log('Hello, World!');");

greetingsObj();

console.log("*********Primitive Object ***********");

    const obj1 = {
        name : "Pranesh",
        age : 20,
        job : "AI Engineer"
    }

    console.log(obj1);
    console.log(typeof obj1);

    console.log("*********Object Object ***********");
    const obj2 = new Object({
        name: "Pranesh",
        age: 20,
        job: "AI Engineer"
    })

    console.log(obj2.job);
    console.log(typeof obj2);

    const oobj1 = {
        name : "Pranesh",
        age : 25,
        a: function(name,age) {
            this.name = name;
            this.age = age;
        }
    }

    oobj1.a("Praneshwar", 20);


    console.log("****Student Constrictor Function****");

    function Student(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;

    }

    const student1 = new Student(1,"Pranesh",20);
    const student2 = new Student(2,"Sri Harshivan",25);
    const student3 = new Student(3,"Aswin Kumar",30);


    console.log(student1);
    console.log(student2);
    console.log(student3);


    console.log("*****************************Intermediate Level Tasks*****************************");
    
    function Students(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    Students.prototype.getResults = function() {
        if(this.grade >= 90) {
            return "A";
        }
        else
        {
            return "B";
        }
    }  

    const studnt4 = new Students("Pranesh", 20, 95);
    console.log("Prototype Inheritance");
    console.log(studnt4);
    console.log(studnt4.getResults());


    console.log("******************************Memory Optimization Tasks******************************");


    function Employee(name,salary){
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function() {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
    
    const emp1 = new Employee("Pranesh", 50000);
    const emp2 = new Employee("Sri Harshivan", 60000);
    console.log(emp1);

    console.log(emp2);
    console.log(emp1.getDetails());
    console.log(emp2.getDetails());

Array.prototype.lastElement = function () {
    // console.log(this);
    return this[this.length - 1];
};

const arr = [1, 2, 3, 4, 5];


console.log("Last Element of Array:", arr.lastElement());

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

const namee = "Praneshwar";
console.log("Reversed String:", namee.reverse());


console.log("Bank Account System Prototype");


function Bank(accno, phoneNo, name,balance=0){
    this.accno = accno;
    this.phoneNo = phoneNo;
    this.name = name;
    this.balance = balance;
}

Bank.prototype.getDetails = function() {
    return `Account Number: ${this.accno}, Phone Number: ${this.phoneNo}, Name: ${this.name}, Balance: ${this.balance}`;
}

Bank.prototype.deposit = function(amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. Current Balance: ₹${this.balance}`;
}

const inputAccno = prompt("Enter amount to deposit:");

const acc1 = new Bank("1234567890", "9876543210", "Pranesh",inputAccno);
const acc2 = new Bank("0987654321", "1234567890", "Sri Harshivan",inputAccno);
console.log(acc1);
console.log(acc2);
console.log();
console.log(acc1.getDetails());
console.log(acc2.getDetails());