import React from "react";
import AddIncome from "./AddIncome";

interface Income {
  type: "Income";
  source: string;
  amount: number; // Change to number
  date: string;
}

interface AddIncomeWrapperProps {
  onAdd: (income: Income) => void;
  onDelete: (index: number) => void;
  incomes: Income[]; // This should be Income[]
}

const AddIncomeWrapper: React.FC<AddIncomeWrapperProps> = ({
  onAdd,
  onDelete,
  incomes,
}) => {
  return (
    <div className="income-wrapper">
      <AddIncome onAdd={onAdd} onDelete={onDelete} incomes={incomes} />
    </div>
  );
};

export default AddIncomeWrapper;
