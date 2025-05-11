import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const NutritionScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nutrition</Text>
      <Text style={styles.subtitle}>Your daily nutrition and meal suggestions</Text>

      {/* Daily Meal Plan */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Meal Plan</Text>
        <Text style={styles.cardData}>Breakfast: Oatmeal with Banana</Text>
        <Text style={styles.cardData}>Lunch: Grilled Chicken Salad</Text>
        <Text style={styles.cardData}>Dinner: Baked Salmon with Veggies</Text>
        <Text style={styles.cardData}>Snack: Greek Yogurt with Berries</Text>
      </View>

      {/* Calories and Macro Breakdown */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Calories & Macronutrients</Text>
        <Text style={styles.cardData}>Total Calories: 2,000 kcal</Text>
        <Text style={styles.cardData}>Protein: 150g</Text>
        <Text style={styles.cardData}>Carbs: 250g</Text>
        <Text style={styles.cardData}>Fats: 70g</Text>
      </View>

      {/* Meal Tracking */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Track Your Meals</Text>
        <Text style={styles.cardData}>Did you track your meals today?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MealTracking")}
        >
          <Text style={styles.buttonText}>Track Meals</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nutrition Progress</Text>
        <Text style={styles.cardData}>You've met your protein goal for the day!</Text>
        <Text style={styles.cardData}>Calories remaining: 500 kcal</Text>
      </View>

      {/* Tips Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nutrition Tip</Text>
        <Text style={styles.cardData}>Stay hydrated! Aim for 2L of water daily.</Text>
      </View>

      {/* Settings or Next Meal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NextMeal")}
      >
        <Text style={styles.buttonText}>View Next Meal</Text>
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
  card: {
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

export default NutritionScreen;
