import React, { useState } from "react";

interface Expense {
  type: "Expense";
  source: string;
  amount: string;
  date: string;
}

interface AddExpenseProps {
  onAdd: (expense: Expense) => void;
}

const AddExpense: React.FC<AddExpenseProps> = (props) => {
  const { onAdd } = props;
  const [expenseSource, setExpenseSource] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string>("");
  const [expenseDate, setExpenseDate] = useState<string>("");

  const handleAddExpense = () => {
    if (expenseSource && expenseAmount && expenseDate) {
      onAdd({
        type: "Expense",
        source: expenseSource,
        amount: expenseAmount,
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
    </div>
  );
};

export default AddExpense;
