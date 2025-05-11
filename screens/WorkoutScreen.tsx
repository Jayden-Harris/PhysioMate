import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WorkoutScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Plan</Text>
      <Text style={styles.subtitle}>
        Choose a workout and start your fitness journey today!
      </Text>

      <View style={styles.workoutCard}>
        <Text style={styles.workoutTitle}>Full Body Workout</Text>
        <Text style={styles.workoutDescription}>
          A great workout for all fitness levels, combining strength training and cardio.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("WorkoutSession")}
        >
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.workoutCard}>
        <Text style={styles.workoutTitle}>Cardio Blast</Text>
        <Text style={styles.workoutDescription}>
          High-intensity interval training to get your heart rate up and burn calories.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("WorkoutSession")}
        >
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  workoutCard: {
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
  workoutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  workoutDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
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
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});

export default WorkoutScreen;
