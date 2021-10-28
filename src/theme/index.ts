import { useColorScheme } from "react-native";

export type ColorTheme = {
  backgroundTop: string;
  backgroundBottom: string;
  text: string;
  primary: string;
  secondary: string;
};

export const LightColor: ColorTheme = {
  backgroundTop: 'white',
  backgroundBottom: 'black',
  text: 'black',
  primary: 'red',
  secondary: 'blue'
};

export const DarkColor: ColorTheme = {
  backgroundTop: 'black',
  backgroundBottom: 'white',
  text: 'white',
  primary: 'red',
  secondary: 'blue'
};

export const useColors = () => {
  const colors = useColorScheme();
  if (colors === 'dark') {
    return DarkColor;
  } else {
    return LightColor;
  }
};
