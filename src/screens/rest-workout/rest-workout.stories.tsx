import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import RestWorkoutLayout from "./rest-workout.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Rest Workout", () => {
const sample = text("Test Label", "default");
return <RestWorkoutLayout />;
});