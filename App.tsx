import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import ProgressScreen from "./screens/ProgressScreen";
import NutritionScreen from "./screens/NutritionScreen";
import UserInfoScreen from "./screens/UserInfoScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isUserInfoComplete, setIsUserInfoComplete] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUserInfo = async () => {
      const data = await AsyncStorage.getItem("User");
      setIsUserInfoComplete(!!data);
    };
    checkUserInfo();
  }, []);

  if (isUserInfoComplete === null) {
    return null; // Or a loading spinner
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isUserInfoComplete ? "HomeScreen" : "UserInfoScreen"}>
          <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ProgressScreen" component={ProgressScreen}options={{ headerShown: false }} />
          <Stack.Screen name="NutritionScreen" component={NutritionScreen}options={{ headerShown: false }} />
          <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>U
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
