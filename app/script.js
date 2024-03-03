let totalExpense = 0;

function addExpense() {
  const expenseInput = document.getElementById("expense");
  const expenseAmount = parseFloat(expenseInput.value);

  if (isNaN(expenseAmount)) {
    alert("Please enter a valid expense amount.");
    return;
  }

  totalExpense += expenseAmount;
  updateExpensesList(expenseAmount);
  updateTotalExpense();
  expenseInput.value = "";
}

function updateExpensesList(amount) {
  const expenseList = document.getElementById("expenseList");
  const newExpenseItem = document.createElement("li");
  newExpenseItem.textContent = `${amount.toFixed(2)} IDR`;
  expenseList.appendChild(newExpenseItem);
}

function updateTotalExpense() {
  const totalExpenseElement = document.getElementById("totalExpense");
  totalExpenseElement.textContent = totalExpense.toFixed(2);
}
