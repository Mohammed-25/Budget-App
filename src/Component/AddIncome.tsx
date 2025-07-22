import React, { useState } from "react";

interface Income {
  type: "Income";
  source: string;
  amount: string;
  date: string;
}

interface AddIncomeProps {
  onAdd: (income: Income) => void;
}

const AddIncome: React.FC<AddIncomeProps> = (props) => {
  const { onAdd } = props;
  const [incomeSource, setIncomeSource] = useState<string>("");
  const [incomeAmount, setIncomeAmount] = useState<string>("");
  const [incomeDate, setIncomeDate] = useState<string>("");

  const handleAddIncome = () => {
    if (incomeSource && incomeAmount && incomeDate) {
      onAdd({
        type: "Income",
        source: incomeSource,
        amount: incomeAmount,
        date: incomeDate,
      });
      setIncomeSource("");
      setIncomeAmount("");
      setIncomeDate("");
    }
  };

  return (
    <div>
      <h2>Income Source</h2>
      <input
        type="text"
        placeholder="Income source"
        value={incomeSource}
        onChange={(e) => setIncomeSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount of income"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <input
        type="date"
        value={incomeDate}
        onChange={(e) => setIncomeDate(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default AddIncome;
