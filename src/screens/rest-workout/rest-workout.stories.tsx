import React from "react";
import { storiesOf } from "@storybook/react-native";
import RestWorkoutLayout from "./rest-workout.layout";
import { WorkoutExample } from "../../models";

storiesOf("UI", module)
  .add("Rest Workout", () => {
    return <RestWorkoutLayout
      workout={WorkoutExample}
    />;
  });