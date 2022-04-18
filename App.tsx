import React from "react";
import {
  NativeBaseProvider
} from "native-base";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";
import {customTheme} from "./assets/theme/theme-winenot";
import WineNot from "./src/WineNot";

const App = () => {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NativeBaseProvider theme={customTheme}>
        <WineNot />
      </NativeBaseProvider>
    </>
  );
};

export default App;
