import { useColorScheme } from "react-native";

export type ColorTheme = {
  backgroundTop: string;
  backgroundBottom: string;
  text: string;
  inputText: string;
  primary: string;
  secondary: string;
};

export const LightColor: ColorTheme = {
  backgroundTop: '#E53655',
  backgroundBottom: '#413AA0',
  text: '#ffffff',
  inputText: '#ffffff',
  primary: '#E53655',
  secondary: '#413AA0'
};

export const DarkColor: ColorTheme = {
  backgroundTop: '#413AA0',
  backgroundBottom: '#000000',
  text: '#ffffff',
  inputText: '#ffffff',
  primary: '#413AA0',
  secondary: '#E53655'
};

export const useColors = () => {
  const colors = useColorScheme();
  if (colors === 'dark') {
    return DarkColor;
  } else {
    return LightColor;
  }
};
