import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import HomeScreenContainer from "../containers/HomeScreenContainer";

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreenContainer}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
