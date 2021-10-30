import { WorkoutProps } from '../screens/workout';

export enum NavigationScreens {
  Main = 'Main',
  Workout = 'Workout'
}

export type NavigationPropList = {
  Main: {};
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


