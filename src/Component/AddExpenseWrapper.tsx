import React from "react";
import AddExpense from "./AddExpense";

interface Expense {
  type: "Expense";
  source: string;
  amount: string;
  date: string;
}

interface AddExpenseWrapperProps {
  onAdd: (expense: Expense) => void;
}

const AddExpenseWrapper: React.FC<AddExpenseWrapperProps> = (props) => {
  const { onAdd } = props;

  return (
    <div className="expense-wrapper">
      <AddExpense onAdd={onAdd} />
    </div>
  );
};

export default AddExpenseWrapper;
