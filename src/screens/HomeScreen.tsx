import React from "react";
import {Button, Center, Heading, HStack, Switch, Text, useColorMode, VStack} from "native-base";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import {
  TourGuideZone,
} from 'rn-tourguide'

interface HomeScreenProps {
  handleOnStart: () => void;
}

export const HomeScreen = (props: HomeScreenProps) => {

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
      <TourGuideZone
        zone={5}
        text={'Zone 5'}
        borderRadius={16}
      >
        <ToggleDarkMode />
      </TourGuideZone>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon/>
        <TourGuideZone
          zone={4}
          text={'Zone 4'}
          borderRadius={16}
        >
          <ToggleDarkMode />
        </TourGuideZone>
        <TourGuideZone
          zone={3}
          text={'Zone 3'}
          borderRadius={16}
        >
          <Heading size="lg">Welcome to NativeBase</Heading>
        </TourGuideZone>
        <HStack alignItems="center">
          <TourGuideZone
            zone={2}
            text={'Zone 2'}
            borderRadius={16}
          >
            <Text>Edit and save to reload.</Text>
          </TourGuideZone>
        </HStack>
        <TourGuideZone
          zone={1}
          text={'Zone 1'}
          borderRadius={16}
        >
          <Button
            onPress={props.handleOnStart}
            colorScheme="emerald"
          >
            Start Tour
          </Button>
        </TourGuideZone>
      </VStack>
    </Center>
  );
};
