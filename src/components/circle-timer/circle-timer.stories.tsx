import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import CircleTimerLayout from "./circle-timer.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Circle Timer", () => {
const sample = text("Test Label", "default");
return <CircleTimerLayout />;
});