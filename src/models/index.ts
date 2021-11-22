import { WorkoutProps } from '../screens/workout';

export enum NavigationScreens {
  Setup = 'Setup',
  Workout = 'Workout',
}

export type NavigationPropList = {
  Setup: undefined;
  Workout: WorkoutProps;
};


export type Workout = {
  sets: number,
  rest: number,
};

export const WorkoutExample: Workout = {
  sets: 5,
  rest: 8,
};


