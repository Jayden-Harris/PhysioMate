import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import theme from "../theme";

const AboutScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About PhysioMate</Text>

      <Text style={styles.paragraph}>
        PhysioMate is your AI-powered fitness companion, designed to guide you through personalized workouts, track your progress, and support your fitness journey.
      </Text>

      <Text style={styles.paragraph}>
        Whether you're aiming to build strength, improve endurance, or maintain a healthier lifestyle, PhysioMate adapts to your goals and evolves with your progress.
      </Text>

      <Text style={styles.subheading}>Your Privacy Matters</Text>

      <Text style={styles.paragraph}>
        We believe in keeping things private and simple. PhysioMate stores all your data locally on your device.
        No accounts, no cloud storage, no tracking. Your data stays with you.
      </Text>

      <Text style={styles.subheading}>Key Features</Text>
      <Text style={styles.listItem}>• Personalized AI workout plans</Text>
      <Text style={styles.listItem}>• Progress tracking and insights</Text>
      <Text style={styles.listItem}>• Fitness and nutrition tips</Text>
      <Text style={styles.listItem}>• Smart rest reminders</Text>
      <Text style={styles.listItem}>• Fully offline functionality</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserInfoScreen")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F9F9F9",
    flexGrow: 1,
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#34495E",
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#4A4A4A",
    lineHeight: 24,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#2E86AB",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
});

export default AboutScreen;
