import React from "react";
import {Center, Heading, HStack, Switch, Text, useColorMode, VStack} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";

const WineNot = () => {

  const ToggleDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    );
  };

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <NativeBaseIcon/>
        <ToggleDarkMode />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <HStack alignItems="center">
          <Text fontFamily={'Montserrat'}>Edit and save to reload.</Text>
        </HStack>
      </VStack>
    </Center>
  );
};

export default WineNot;
