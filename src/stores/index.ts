import AsyncStorage from "@react-native-async-storage/async-storage";
import create from 'zustand';
import { persist } from "zustand/middleware";
import { Workout, WorkoutExample } from "../models";
import { ColorTheme, LightColor } from '../theme';

type colorStore = {
  colors: ColorTheme;
  setColors: (theme: ColorTheme) => void;
}

export const useColorStore = create<colorStore>(
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

type workoutStore = {
  workout: Workout;
  setWorkout: (workout: Workout) => void;
  hydrated: boolean;
  setHydrated: () => void;
}

export const useWorkoutStore = create<workoutStore>(
  persist(
    set => ({
      workout: WorkoutExample,
      setWorkout: (workout: Workout) => {
        set(state => {
          return { ...state, workout }
        })
      },
      hydrated: false,
      setHydrated: () => set({ hydrated: true })
    }),
    {
      name: "workout",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state, error) => {
        console.log(state)
        if (state) {
          state.setHydrated();
        }
      }
    }
  )
);
