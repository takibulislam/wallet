// function to getValue 
function getValue (elementId){
    const element = document.getElementById(elementId)
    return parseInt(element.value);
}
// function to calculate expense
function calculateExpense (){
    //net Income Calculation
    const incomeField = document.getElementById("income-field");
    const netIncome = parseInt(incomeField.value);
    // net expense calculation
    const food = getValue("food");
    const rent = getValue("rent");
    const clothes = getValue("clothes");
    const totalExpense = food + rent + clothes;
    const balance = netIncome - totalExpense;

    // Set total Balance
const balanceFinalField = document.getElementById("total-balance-amount");
balanceFinalField.innerText = balance;

// set Total expense
const expenseTotalField = document.getElementById("total-expense-amount");
expenseTotalField.innerText = totalExpense;
}

// Function to calculate savings
function calculateSavings (){
    //finding the saving target 
    const savingTargetField = document.getElementById("savings")
    const savingTarget = parseInt(savingTargetField.value);

    function calculateSavingAmount(amount, parcent){
        const savingAmount = (amount * parcent )/100;
        return savingAmount;
    }
    const incomeField = document.getElementById("income-field");
    const netIncome = parseInt(incomeField.value);
    const totalSavingAmount = calculateSavingAmount(netIncome, savingTarget)

    // Set saving amount
    const savingBalance = document.getElementById("total-saving-amount");
    savingBalance.innerText = totalSavingAmount;

    // remaining balance after saving
    const food = getValue("food");
    const rent = getValue("rent");
    const clothes = getValue("clothes");
    const totalExpense = food + rent + clothes;

    // set Remaining balance
    const finalBalance = netIncome - (totalExpense + totalSavingAmount);
    const balanceFinalField = document.getElementById("total-remaining-amount");
     balanceFinalField.innerText = finalBalance;
}
// Event Listener
document.getElementById("btn-savings").addEventListener("click", calculateSavings);
document.getElementById("btn-expences").addEventListener("click", calculateExpense);