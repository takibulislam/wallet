


// Net Expense
function totalCalc (value){
    const expences = document.getElementById(value);
    const elementValueSting = expences.value;
    const elementValue = parseInt(elementValueSting);
    return elementValue;
}
document.getElementById("btn-calculate").addEventListener("click", function(){
// Net Income
const incomeField = document.getElementById("income-field");
const netIncome = incomeField.value;

const foodCost = totalCalc("food");
const rentCost = totalCalc("rent");
const clothesCost = totalCalc("clothes");
const totalExpense = foodCost + rentCost + clothesCost;
const balance = netIncome - totalExpense;

// Set total Balance
const balanceFinalField = document.getElementById("total-balance-amount");
balanceFinalField.innerText = balance;

// set Total expense
const expenseTotalField = document.getElementById("total-expense-amount");
expenseTotalField.innerText = totalExpense;
})

// Savings
document.getElementById("btn-savings").addEventListener("click", function(){
    const savingTargetField = document.getElementById("savings")
    const savingTarget = savingTargetField.value;

    function parcentCalc(amount, parcent){
        const savingTotal = (amount * parcent) / 100;
        return savingTotal;
    }
    const incomeField = document.getElementById("income-field");
    const netIncome = incomeField.value;
    const savingTotalAmouont = parcentCalc(netIncome, savingTarget);

    // set saving amount 
        //Set value to saving Balance 
        const savingBalance = document.getElementById("total-saving-amount");
        savingBalance.innerText = savingTotalAmouont

    // Balance Update
    // Net Income
const foodCost = totalCalc("food");
const rentCost = totalCalc("rent");
const clothesCost = totalCalc("clothes");
const totalExpense = foodCost + rentCost + clothesCost;
const balance = netIncome - totalExpense;

    const finalBalance = netIncome - (totalExpense + savingTotalAmouont);
    const balanceFinalField = document.getElementById("total-remaining-amount");
     balanceFinalField.innerText = finalBalance;
})