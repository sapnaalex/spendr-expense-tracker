export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: 'Food' | 'Transport' | 'Shopping' | 'Bills' | 'Entertainment' | 'Other';
  date: string;
}

export type RootTabParamList = {
  Dashboard: undefined;
  AddExpense: undefined;
  Analytics: undefined;
};