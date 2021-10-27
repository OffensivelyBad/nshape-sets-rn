import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import ButtonLayout from "./button.layout";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const sample = text("Test Label", "");
    return <ButtonLayout />;
  });