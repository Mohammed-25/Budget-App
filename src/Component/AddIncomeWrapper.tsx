import React from "react";
import AddIncome from "./AddIncome";

interface Income {
  type: "Income";
  source: string;
  amount: string;
  date: string;
}

interface AddIncomeWrapperProps {
  onAdd: (income: Income) => void;
}

const AddIncomeWrapper: React.FC<AddIncomeWrapperProps> = (props) => {
  const { onAdd } = props;

  return (
    <div className="income-wrapper">
      <AddIncome onAdd={onAdd} />
    </div>
  );
};

export default AddIncomeWrapper;
