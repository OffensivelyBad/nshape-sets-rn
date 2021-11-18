import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import SetupLayout from "./setup.layout";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Main", () => {
    return <SetupLayout
      setsValue={5}
      onNewSets={() => { }}
      restValue={60}
      onNewRest={() => { }}
      onStartPressed={() => { }}
    />;
  });