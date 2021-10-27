import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import TimerLayout from "./timer.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Timer", () => {
const sample = text("Test Label", "default");
return <TimerLayout />;
});