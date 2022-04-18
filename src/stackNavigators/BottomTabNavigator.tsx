import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";
import HomeScreenContainer from "../containers/HomeScreenContainer";
import {Icon} from "native-base";

export const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Icon
                as={<Feather name="home" />}
                size="md"
                color={focused ? "primary.500" : "muted.500"}
              />
            );
          }
          },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenContainer}
      />
    </Tab.Navigator>
  );
};
