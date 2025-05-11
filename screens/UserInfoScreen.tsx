import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme"
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserInfoScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");

  const handleContinue = async () => {
    const user = {
      name,
      age,
      gender,
      goal,
      experience,
    };
  
    try {
      await AsyncStorage.setItem("User", JSON.stringify(user));
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Error saving user info:", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.header}>Tell us about yourself</Text>

      <View style={styles.input}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          style={styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Age"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          style={styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <SelectList
          data={[
            { key: "Male", value: "Male" },
            { key: "Female", value: "Female" },
            { key: "Other", value: "Other" },
          ]}
          setSelected={setGender}
          placeholder="Select Gender"
          save="key"
          defaultOption={gender ? { key: gender, value: gender } : undefined}
          boxStyles={{ backgroundColor: "transparent", borderWidth: 0 }}
          dropdownStyles={{ backgroundColor: "#fff" }}
          dropdownTextStyles={{ color: "#000" }}
        />
      </View>

      <View style={styles.input}>
        <SelectList
          data={[
            { key: "Lose Fat", value: "Lose Fat" },
            { key: "Build Muscle", value: "Build Muscle" },
            { key: "Stay Fit", value: "Stay Fit" },
          ]}
          setSelected={setGoal}
          placeholder="Select Fitness Goal"
          save="key"
          defaultOption={goal ? { key: goal, value: goal } : undefined}
          boxStyles={{ backgroundColor: "transparent", borderWidth: 0 }}
          dropdownStyles={{ backgroundColor: "#fff" }}
          dropdownTextStyles={{ color: "#000" }}
        />
      </View>

      <View style={styles.input}>
        <SelectList
          data={[
            { key: "beginner", value: "Beginner" },
            { key: "intermediate", value: "Intermediate" },
            { key: "advanced", value: "Advanced" },
          ]}
          setSelected={setExperience}
          placeholder="Select Experience Level"
          save="key"
          defaultOption={
            experience ? { key: experience, value: experience } : undefined
          }
          boxStyles={{ backgroundColor: "transparent", borderWidth: 0 }}
          dropdownStyles={{ backgroundColor: "#fff" }}
          dropdownTextStyles={{ color: "#000" }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: theme.colours.BG_COLOR,
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colours.TEXT_COLOUR,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: theme.colours.INPUT_BG,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    borderWidth: 1,
    borderColor: theme.colours.BORDER_COLOR,
    marginBottom: 16,
  },
  textInput: {
    color: theme.colours.TEXT_COLOUR,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colours.PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserInfoScreen;
