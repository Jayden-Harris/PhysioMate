import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProgressScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      <Text style={styles.subtitle}>Track your fitness journey</Text>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Total Workouts Completed</Text>
        <Text style={styles.cardData}>45 Workouts</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Total Calories Burned</Text>
        <Text style={styles.cardData}>3,500 kcal</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Weight Progress</Text>
        <Text style={styles.cardData}>Current Weight: 75kg</Text>
        <Text style={styles.cardData}>Starting Weight: 80kg</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Reps / Sets Progress</Text>
        <Text style={styles.cardData}>Best Squat: 100kg for 8 reps</Text>
        <Text style={styles.cardData}>Best Bench Press: 80kg for 10 reps</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Workout</Text>
      </TouchableOpacity>

      {/* Add a button to navigate to detailed analytics if needed */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DetailedAnalytics")}
      >
        <Text style={styles.buttonText}>View Detailed Analytics</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },
  progressCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardData: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProgressScreen;
