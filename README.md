# Spendr — Expense Tracker App 📱💰

Spendr is a production-style, mobile expense tracking application built using **React Native**, **Expo**, and **TypeScript**. It offers intuitive expense logging, local persistence, and real-time spending analytics.

---

## 🚀 Key Features

* **Dashboard Overview:** Displays total expenditure and recent transaction history.
* **Add Expense Flow:** Easily log transactions with custom categories, dates, and amounts.
* **Persistent Storage:** Uses `@react-native-async-storage/async-storage` for seamless local data retention.
* **Analytics View:** Provides category summaries and average spending metrics.
* **Tab Navigation:** Built using `@react-navigation/bottom-tabs` for clean, mobile-native screen transitions.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React Native with Expo (SDK 57)
* **Language:** TypeScript
* **State Management:** React Context API (`ExpenseContext`)
* **Storage:** Async Storage
* **Navigation:** React Navigation v6
* **CI/CD:** GitHub Actions Automated Typecheck & Build Pipeline

---

## ⚙️ Getting Started

### Prerequisites
* Node.js (v18 or higher)
* Expo Go app on iOS or Android (or Android Studio / Xcode emulators)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/spendr-expense-tracker.git](https://github.com/YOUR-USERNAME/spendr-expense-tracker.git)
   cd spendr-expense-tracker

## Install dependencies:

```Bash
npm install
```
## Start the development server:

```Bash
npx expo start
```