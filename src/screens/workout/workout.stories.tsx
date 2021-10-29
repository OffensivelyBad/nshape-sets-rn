import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import WorkoutLayout from "./workout.layout";
import { WorkoutExample } from "../../models";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Workout", () => {
    const sample = text("Test Label", "default");
    return <WorkoutLayout
      workout={WorkoutExample}
    />;
  });