import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {GameScreen } from "./screens/GameScreen";


const Stack = createStackNavigator()

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Exit"
              component={GameScreen}
              options={{
                title: 'Exit',
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30
                },
              }}
            />
            </Stack.Navigator>
            </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
