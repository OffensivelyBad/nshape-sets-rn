import AsyncStorage from "@react-native-async-storage/async-storage";
import create from 'zustand';
import { persist } from "zustand/middleware";
import { ColorTheme, LightColor } from '../theme';

type store = {
  colors: ColorTheme;
  setColors: (theme: ColorTheme) => void;
}

export const useColorStore = create<store>(
  persist(
    set => ({
      colors: LightColor,
      setColors: (theme: ColorTheme) => {
        set(state => {
          return { ...state, colors: theme };
        })
      }
    }),
    {
      name: "colors",
      getStorage: () => AsyncStorage,
    }
  )
);