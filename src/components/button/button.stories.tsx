import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import Button from "./button";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    return <Button
      image={require("../../assets/Title-Rest.png")}
      onPress={() => { }}
    />;
  });