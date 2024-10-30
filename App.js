import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";
import NewsAndEventsPage from "./src/screens/NewsAndEventsPage";
import LogIn from "./src/screens/LogIn";
import verification from "./src/screens/verification";
import IntroPage from "./src/screens/IntroPage";
import signup from "./src/screens/signup";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
          <Stack.Screen name="IntroPage" component={IntroPage} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="verification" component={verification} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="React Native Maps" component={MapPage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
        <Stack.Screen name="NewsAndEventsPage" component={NewsAndEventsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
