import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }: any) => {
  const [user, setUser] = useState<{ name?: string } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AsyncStorage.getItem("User");

      if (!userData) {
        navigation.navigate("UserInfoScreen");
        return;
      }

      setUser(JSON.parse(userData));
    };

    fetchUserData();
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.greeting}>
        Welcome back{user?.name ? `, ${user.name}` : ""} 👋
      </Text>
      <Text style={styles.subtitle}>What would you like to do today?</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("WorkoutScreen")}
        >
          <Text style={styles.cardTitle}>🏋️ Generate a workout using AI</Text>
          <Text style={styles.cardText}>Create a workout using AI based upon </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: Platform.OS === "ios" ? 80 : 60,
    paddingHorizontal: 24,
    backgroundColor: "#f2f4f7",
    alignItems: "center",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E86AB",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 32,
  },
  cardContainer: {
    width: "100%",
    gap: 20,
  },
  card: {
    backgroundColor: "#ffffff", // Unified card color
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2E86AB",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
