import React, { useState } from "react";
import "./App.css";
import AddIncomeWrapper from "./Component/AddIncomeWrapper";
import AddExpenseWrapper from "./Component/AddExpenseWrapper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Transaction {
  type: "Income" | "Expense";
  source: string;
  amount: number;
  date: string;
}

const schema = z.object({
  targetSaving: z.number().positive().nonnegative(),
  currentSaving: z.number().positive().nonnegative(),
});

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [targetSaving, setTargetSaving] = useState<number>(0);
  const [currentSaving, setCurrentSaving] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const deleteTransaction = (index: number) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };

  const calculateBalance = () => {
    const income = transactions
      .filter((t) => t.type === "Income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "Expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    return income - expense - currentSaving;
  };

  const handleTransfer = () => {
    const balance = calculateBalance();
    if (balance > 0) {
      setCurrentSaving((prev) => prev + balance);
      alert(`Transferred ${balance} to savings!`);
    } else {
      alert("No positive balance available for transfer.");
    }
  };

  const onSubmit = (data: any) => {
    const targetSavingValue = Number(data.targetSaving);
    const currentSavingValue = Number(data.currentSaving);

    if (!isNaN(targetSavingValue) && targetSavingValue > 0) {
      setTargetSaving(targetSavingValue);
    } else {
      alert("Please enter a valid target saving amount.");
    }

    if (!isNaN(currentSavingValue) && currentSavingValue >= 0) {
      setCurrentSaving(currentSavingValue);
    } else {
      alert("Please enter a valid current saving amount.");
    }
  };

  const progress = (currentSaving / targetSaving) * 100;

  return (
    <div className="App">
      <section>
        <AddIncomeWrapper
          onAdd={addTransaction}
          onDelete={deleteTransaction}
          incomes={transactions.filter((t) => t.type === "Income")}
        />
      </section>
      <section>
        <AddExpenseWrapper
          onAdd={addTransaction}
          onDelete={deleteTransaction}
          expenses={transactions.filter((t) => t.type === "Expense")}
        />
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2>Set Target Saving</h2>
        <div className="input-group">
          <input
            type="number"
            placeholder="Target Saving"
            {...register("targetSaving")}
          />
          {errors.targetSaving && (
            <p className="error-message">{errors.targetSaving.message}</p>
          )}
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Current Saving"
            {...register("currentSaving")}
          />
          {errors.currentSaving && (
            <p className="error-message">{errors.currentSaving.message}</p>
          )}
        </div>
        <button type="submit">Set Target</button>
      </form>

      <div className="progress">
        <h2>Current Balance: {calculateBalance()}</h2>
        <div className="transfer-section">
          <h3>Current saving: {currentSaving}</h3>
          <h3>Target: {targetSaving}</h3>
          <h3 className="progress">Progress: {progress.toFixed(2)}%</h3>
          <button onClick={handleTransfer}>Transfer to saving account</button>
        </div>
      </div>
    </div>
  );
};

export default App;
