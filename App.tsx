import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { GameScreen } from "./screens/GameScreen";
import { MenuScreen } from "./screens/MenuScreen";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Menu"
              component={MenuScreen}
              options={{
                title: "Menu",
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontSize: 30,
                },
              }}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{
                title: "Game",
                headerStyle: {
                  backgroundColor: "#000000",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontSize: 30,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
