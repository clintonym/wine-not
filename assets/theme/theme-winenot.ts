import {extendTheme} from "native-base";

export const customTheme = extendTheme({
  fontConfig: {
    'Montserrat': {
      100: {
        normal: 'Montserrat_100Thin',
        italic: 'Montserrat_100Thin_Italic',
      },
      300: {
        normal: 'Montserrat_300Light',
        italic: 'Montserrat_300Light_Italic',
      },
      400: {
        normal: 'Montserrat_400Regular',
        italic: 'Montserrat_400Regular_Italic',
      },
      500: {
        normal: 'Montserrat_500Medium',
        italic: 'Montserrat_500Medium_Italic',
      },
      700: {
        normal: 'Montserrat_700Bold',
        italic: 'Montserrat_700Bold_Italic',
      },
      900: {
        normal: 'Montserrat_900Black',
        italic: 'Montserrat_900Black_Italic',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
  colors: {
    primary: {
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412"
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});
