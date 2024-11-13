import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";
import NewsAndEventsPage from "./src/screens/NewsAndEventsPage";
import LogIn from "./src/screens/LogIn";
import Verification from "./src/screens/Verification";
import IntroPage from "./src/screens/IntroPage";
import Signup from "./src/screens/Signup";
import SearchPage from "./src/screens/SearchPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
          <Stack.Screen name="IntroPage" component={IntroPage} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen name="NewsAndEventsPage" component={NewsAndEventsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
