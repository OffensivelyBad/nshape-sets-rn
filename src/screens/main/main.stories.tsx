import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import MainLayout from "./main.layout";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Main", () => {
    const sample = text("Test Label", "");
    return <MainLayout />;
  });