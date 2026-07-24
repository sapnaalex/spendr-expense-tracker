import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExpenseProvider } from './src/context/ExpenseContext';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { AddExpenseScreen } from './src/screens/AddExpenseScreen';
import { AnalyticsScreen } from './src/screens/AnalyticsScreen';
import { RootTabParamList } from './src/types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}>
          <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Spendr Overview' }} />
          <Tab.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} />
          <Tab.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Analytics' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}