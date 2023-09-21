// function to calculate expense 
function calculateExpences (){
    const income = parseInt(document.getElementById("income-field").value);
    const food = parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes = parseInt (document.getElementById("clothes").value);
    const expences = food + rent + clothes;
    const balance = income - expences;

    // set total Expense amount
    document.getElementById("total-expense-amount").textContent = expences;
    document.getElementById("total-balance-amount").textContent = balance;
}
// function to calculate total saving
function calculateSavings (){
    const income = parseInt(document.getElementById("income-field").value);
    const savingParcentage = parseInt(document.getElementById("savings").value);
    const savingAmount = (income * savingParcentage)/ 100;
    const remainingBalnace = income - totalExpences() + savingAmount;

    // set saving Amount
    document.getElementById("total-saving-amount").textContent = savingAmount;
    document.getElementById("total-remaining-amount").textContent = remainingBalnace;
}
// function to calculate total expences only
function totalExpences (){
    const food = parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes = parseInt(document.getElementById("clothes").value);
    return food + rent + clothes;
}
document.getElementById("btn-savings").addEventListener("click", calculateSavings);
document.getElementById("btn-expences").addEventListener("click", calculateExpences);