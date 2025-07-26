import React, { useState } from "react";

interface Expense {
  type: "Expense";
  source: string;
  amount: number; // Change to number
  date: string;
}

interface AddExpenseProps {
  onAdd: (expense: Expense) => void;
  onDelete: (index: number) => void;
  expenses: Expense[];
}

const AddExpense: React.FC<AddExpenseProps> = ({
  onAdd,
  onDelete,
  expenses,
}) => {
  const [expenseSource, setExpenseSource] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string>("");
  const [expenseDate, setExpenseDate] = useState<string>("");

  const handleAddExpense = () => {
    if (expenseSource && expenseAmount && expenseDate) {
      onAdd({
        type: "Expense",
        source: expenseSource,
        amount: Number(expenseAmount),
        date: expenseDate,
      });
      setExpenseSource("");
      setExpenseAmount("");
      setExpenseDate("");
    }
  };

  return (
    <div>
      <h2>Expense Source</h2>
      <input
        type="text"
        placeholder="Expense source"
        value={expenseSource}
        onChange={(e) => setExpenseSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount of expense"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <input
        type="date"
        value={expenseDate}
        onChange={(e) => setExpenseDate(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.source}: {expense.amount} on {expense.date}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddExpense;
