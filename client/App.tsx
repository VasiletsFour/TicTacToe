import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { GameScreen } from "./screens/GameScreen";
import { GameSettingScreen } from "./screens/GameSettingScreen";
import { MenuScreen } from "./screens/MenuScreen";
import { SettingScreen } from "./screens/SettingScreen";

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
              options={options}
            />
            <Stack.Screen
              name="GameSetting"
              component={GameSettingScreen}
              options={options}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={options}
            />
            <Stack.Screen
              name="Setting"
              component={SettingScreen}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const options = {
  title: "TicTocToe",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 30,
  },
};
