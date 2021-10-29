import React from "react";
import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import CircleTimer from "./circle-timer";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Circle Timer", () => {
    const startTimer = boolean("Start timer?", false);
    const time = number("Seconds", 10);
    return <CircleTimer
      timeInSeconds={time}
      startCountdown={startTimer}
    />;
  });