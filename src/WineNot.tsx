import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {HomeStackNavigator} from "./stackNavigators/HomeStackNavigator";

const WineNot = () => {

  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default WineNot;
