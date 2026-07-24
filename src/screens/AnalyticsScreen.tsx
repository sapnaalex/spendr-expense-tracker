import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useExpenses } from '../context/ExpenseContext';

export const AnalyticsScreen = () => {
  const { expenses, totalSpent } = useExpenses();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Summary</Text>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>Total Logged Items</Text>
        <Text style={styles.boxValue}>{expenses.length}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>Average Expense</Text>
        <Text style={styles.boxValue}>
          ${expenses.length > 0 ? (totalSpent / expenses.length).toFixed(2) : '0.00'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f7' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  box: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 12 },
  boxLabel: { fontSize: 14, color: '#666' },
  boxValue: { fontSize: 24, fontWeight: 'bold', marginTop: 4 },
});