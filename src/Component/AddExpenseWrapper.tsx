import React from "react";
import AddExpense from "./AddExpense";

interface Expense {
  type: "Expense";
  source: string;
  amount: number; // Change to number
  date: string;
}

interface AddExpenseWrapperProps {
  onAdd: (expense: Expense) => void;
  onDelete: (index: number) => void;
  expenses: Expense[]; // This should be Expense[]
}

const AddExpenseWrapper: React.FC<AddExpenseWrapperProps> = ({
  onAdd,
  onDelete,
  expenses,
}) => {
  return (
    <div className="expense-wrapper">
      <AddExpense onAdd={onAdd} onDelete={onDelete} expenses={expenses} />
    </div>
  );
};

export default AddExpenseWrapper;
