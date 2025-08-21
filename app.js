        class BankAccount {
            constructor(accountHolder, initialBalance = 0) {
                this.accountHolder = accountHolder;
                this._balance = initialBalance;
            }

            deposit(amount) {
                if (amount > 0) {
                    this._balance += amount;
                    return `Deposited $${amount.toFixed(2)}. New balance: $${this._balance.toFixed(2)}`;
                }
                return "Invalid deposit amount";
            }

            withdraw(amount) {
                if (amount > 0 && amount <= this._balance) {
                    this._balance -= amount;
                    return `Withdrew $${amount.toFixed(2)}. New balance: $${this._balance.toFixed(2)}`;
                }
                return "Invalid withdrawal amount or insufficient funds";
            }

            checkBalance() {
                return `Account balance for ${this.accountHolder}: $${this._balance.toFixed(2)}`;
            }
        }

        let account = null;

        function createAccount() {
            const holder = document.getElementById('accountHolder').value;
            const balance = parseFloat(document.getElementById('initialBalance').value) || 0;
            if (holder && balance >= 0) {
                account = new BankAccount(holder, balance);
                document.getElementById('output').innerText = `Account created for ${holder}`;
            } else {
                document.getElementById('output').innerText = "Please enter a valid account holder name and balance";
            }
        }

        function deposit() {
            if (account) {
                const amount = parseFloat(document.getElementById('depositAmount').value);
                document.getElementById('output').innerText = account.deposit(amount);
            } else {
                document.getElementById('output').innerText = "Create an account first";
            }
        }

        function withdraw() {
            if (account) {
                const amount = parseFloat(document.getElementById('withdrawAmount').value);
                document.getElementById('output').innerText = account.withdraw(amount);
            } else {
                document.getElementById('output').innerText = "Create an account first";
            }
        }

        function checkBalance() {
            if (account) {
                document.getElementById('output').innerText = account.checkBalance();
            } else {
                document.getElementById('output').innerText = "Create an account first";
            }
        }


        
        
        
        
        
        
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            getInfo() {
                return `Name: ${this.name}, Age: ${this.age}`;
            }
        }

        class Student extends Person {
            constructor(name, age, studentId) {
                super(name, age);
                this.studentId = studentId;
                this.courses = [];
            }

            enrollCourse(course) {
                this.courses.push(course);
                return `${this.name} enrolled in ${course}`;
            }

            getInfo() {
                return `${super.getInfo()}, Student ID: ${this.studentId}, Courses: ${this.courses.join(", ") || "None"}`;
            }
        }

        class Teacher extends Person {
            constructor(name, age, employeeId) {
                super(name, age);
                this.employeeId = employeeId;
                this.subjects = [];
            }

            assignSubject(subject) {
                this.subjects.push(subject);
                return `${this.name} assigned to teach ${subject}`;
            }

            getInfo() {
                return `${super.getInfo()}, Employee ID: ${this.employeeId}, Subjects: ${this.subjects.join(", ") || "None"}`;
            }
        }

        let currentPerson = null;

        function addStudent() {
            const name = document.getElementById('name').value;
            const age = parseInt(document.getElementById('age').value);
            const id = document.getElementById('id').value;
            currentPerson = new Student(name, age, id);
            document.getElementById('Student').innerText = `Student ${name} added`;
        }

        function addTeacher() {
            const name = document.getElementById('name').value;
            const age = parseInt(document.getElementById('age').value);
            const id = document.getElementById('id').value;
            currentPerson = new Teacher(name, age, id);
            document.getElementById('Student').innerText = `Teacher ${name} added`;
        }

        function enrollOrAssign() {
            const item = document.getElementById('courseOrSubject').value;
            if (currentPerson instanceof Student) {
                document.getElementById('Student').innerText = currentPerson.enrollCourse(item);
            } else if (currentPerson instanceof Teacher) {
                document.getElementById('Student').innerText = currentPerson.assignSubject(item);
            } else {
                document.getElementById('Student').innerText = "Create a student or teacher first";
            }
        }

        function showInfo() {
            if (currentPerson) {
                document.getElementById('Student').innerText = currentPerson.getInfo();
            } else {
                document.getElementById('Student').innerText = "Create a student or teacher first";
            }
        }