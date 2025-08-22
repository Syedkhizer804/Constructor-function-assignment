
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
    }
  }

  checkBalance() {
    console.log(`Account balance for ${this.owner}: ${this.balance}`);
  }
}

let account = new BankAccount("Ammar", 1000);
account.deposit(500);
account.withdraw(300);
account.checkBalance();

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task added: ${task}`);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
    console.log(`Task removed: ${task}`);
  }

  listTasks() {
    console.log("Your Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

let myTodos = new TodoList();
myTodos.addTask("Complete Assignment");
myTodos.addTask("Go for Walk");
myTodos.listTasks();
myTodos.removeTask("Go for Walk");
myTodos.listTasks();


console.log("************* School Class Hierarchy *************");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}.`);
  }
}

let student1 = new Student("Ali", 15, "10th");
student1.introduce();
student1.study();

let teacher1 = new Teacher("Sara", 30, "Mathematics");
teacher1.introduce();
teacher1.teach();
