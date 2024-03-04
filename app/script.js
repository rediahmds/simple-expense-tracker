let totalExpense = 0;

function addExpense() {
  const expenseAmountElement = document.getElementById("expense");
  const expenseNameElement = document.getElementById("expenseName");

  const expenseAmount = parseFloat(expenseAmountElement.value);
  const expenseName = expenseNameElement.value;

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  totalExpense += expenseAmount;
  updateExpensesList(expenseName, expenseAmount);
  updateTotalExpense();

  expenseAmountElement.value = "";
  expenseNameElement.value = "";
}

function updateExpensesList(name, amount) {
  const expenseList = document.getElementById("expenseList");
  const newExpenseItem = document.createElement("li");
  newExpenseItem.textContent = `${name} - ${amount.toFixed(2)} IDR`;
  expenseList.appendChild(newExpenseItem);
}

function updateTotalExpense() {
  const totalExpenseElement = document.getElementById("totalExpense");
  totalExpenseElement.textContent = totalExpense.toFixed(2);
}
