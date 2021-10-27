import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import SliderInputLayout from "./slider-input.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Slider Input", () => {
const sample = text("Test Label", "default");
return <SliderInputLayout />;
});