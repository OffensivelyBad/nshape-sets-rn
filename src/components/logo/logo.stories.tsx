import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import LogoLayout from "./logo";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Logo", () => {
    return <LogoLayout />;
  });