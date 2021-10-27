import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import ActiveWorkoutLayout from "./active-workout.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Active Workout", () => {
const sample = text("Test Label", "default");
return <ActiveWorkoutLayout />;
});