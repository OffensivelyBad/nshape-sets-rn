import React from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import WorkoutLayout from "./workout.layout";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Workout", () => {
    const resting = boolean("Resting", false);
    return <WorkoutLayout
      currentSet={5}
      remainingSetsDescription={"7"}
      nextSetsDescription={"6 of 12"}
      elapsedTime={"23:45"}
      restSeconds={60}
      resting={resting}
      onRestEnd={() => { }}
      onSetEnd={() => { }}
    />;
  });