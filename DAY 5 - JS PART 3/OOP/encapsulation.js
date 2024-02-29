//Encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if (this.balance >= amount) {
            this.balance -= amount;
        } else{
            console.log("Insufficient balance!");
        }
        
    }

    getAccountInfo(){
        return (`Your account number is ${this.accountNumber}, your balance is ${this.balance}`)
    }

}

const myAccount = new BankAccount("98765", 0);
const regelAccount = new BankAccount("12345", 1000);
myAccount.deposite(1000000);

regelAccount.withdraw(1500);

console.log(myAccount.getAccountInfo());
console.log(regelAccount.getAccountInfo());

