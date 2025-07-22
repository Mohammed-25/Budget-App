import React, { useState } from "react";
import "./App.css";
import AddIncomeWrapper from "./Component/AddIncomeWrapper";
import AddExpenseWrapper from "./Component/AddExpenseWrapper";

interface Transaction {
  type: "Income" | "Expense";
  source: string;
  amount: string;
  date: string;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <div className="App">
      <AddIncomeWrapper onAdd={addTransaction} />
      <AddExpenseWrapper onAdd={addTransaction} />

      <div className="list-container">
        <h2>Transactions</h2>
        <ul>
          {transactions.map((trans, index) => (
            <li
              key={index}
            >{`${trans.type}: ${trans.source} - ${trans.amount} on ${trans.date}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
