import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useExpenses } from '../context/ExpenseContext';

export const DashboardScreen = () => {
  const { expenses, totalSpent, deleteExpense } = useExpenses();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Spent</Text>
        <Text style={styles.cardAmount}>${totalSpent.toFixed(2)}</Text>
      </View>

      <Text style={styles.sectionHeader}>Recent Transactions</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemMeta}>{item.category} • {item.date}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.itemAmount}>-${item.amount.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => deleteExpense(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f7' },
  card: { backgroundColor: '#6200ee', padding: 24, borderRadius: 16, marginBottom: 20 },
  cardTitle: { color: '#e0e0e0', fontSize: 14, textTransform: 'uppercase' },
  cardAmount: { color: '#ffffff', fontSize: 32, fontWeight: 'bold', marginTop: 8 },
  sectionHeader: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  item: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemTitle: { fontSize: 16, fontWeight: '500' },
  itemMeta: { color: '#666', fontSize: 12, marginTop: 4 },
  itemAmount: { fontSize: 16, fontWeight: '600', color: '#d32f2f' },
  deleteText: { color: '#888', fontSize: 12, marginTop: 4 },
});