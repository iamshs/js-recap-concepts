/*
const bank = owner =>{
    balance = 0;
    return amount =>{
        balance = balance + amount;
        return balance;
    }
}
*/

const bank = owner =>{
    balance = 0;
    return{
       deposit: amount =>{
           //balance += amount
        balance = balance + amount;
        return balance;
    },
    withdraw:  amount =>{
        //balance -=amount
        balance = balance - amount;
        return balance;
    }
    }
   
}

const mofijBank = bank('mofij');
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(200));
console.log(mofijBank.withdraw(100));

