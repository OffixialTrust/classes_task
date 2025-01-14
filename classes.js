class Account {
    constructor(name, bal) {
        this.name = name;
        this.balance = bal;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "insufficient funds";
        } else {
            this.balance -= amount;
        }
    }
}

const acc1 = new Account("Trust Richard", 5000);

acc1.deposit(2000);
acc1.withdraw(800);

// output the value of the account balance
console.log(acc1.balance);