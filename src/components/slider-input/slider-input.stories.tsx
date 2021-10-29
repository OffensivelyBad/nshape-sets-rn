import React from "react";
import { storiesOf } from "@storybook/react-native";
import SliderInput from "./slider-input";

storiesOf("UI", module)
  .add("Slider Input", () => {
    return <SliderInput
      initialValue={50}
      image={require('../../assets/Title-Sets.png')}
    />;
  });