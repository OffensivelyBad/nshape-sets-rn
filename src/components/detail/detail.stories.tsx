import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import Detail from "./detail";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Detail", () => {
    return <Detail
      image={require('../../assets/Title-RemainingSets.png')}
      value={23}
    />;
  });