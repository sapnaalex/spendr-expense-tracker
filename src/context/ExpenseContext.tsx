import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Expense } from '../types';

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
  totalSpent: number;
}

const STORAGE_KEY = '@spendr_expenses_v1';

const INITIAL_EXPENSES: Expense[] = [
  { id: '1', title: 'Groceries', amount: 45.50, category: 'Food', date: '2026-07-22' },
  { id: '2', title: 'Uber Ride', amount: 18.20, category: 'Transport', date: '2026-07-23' },
  { id: '3', title: 'Internet Bill', amount: 60.00, category: 'Bills', date: '2026-07-24' },
];

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setExpenses(JSON.parse(data));
      } else {
        setExpenses(INITIAL_EXPENSES);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EXPENSES));
      }
    } catch (e) {
      console.error('Failed to load expenses', e);
    }
  };

  const addExpense = async (newExpenseData: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      ...newExpenseData,
      id: Date.now().toString(),
    };
    const updated = [newExpense, ...expenses];
    setExpenses(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteExpense = async (id: string) => {
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, totalSpent }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error('useExpenses must be used within ExpenseProvider');
  return context;
};