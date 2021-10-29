import React from "react";
import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import MainLayout from "./main.layout";

storiesOf("UI", module)
  .addDecorator(withKnobs)
  .add("Main", () => {
    return <MainLayout
      setsValue={5}
      onNewSets={() => { }}
      restValue={60}
      onNewRest={() => { }}
      onStartPressed={() => { }}
    />;
  });