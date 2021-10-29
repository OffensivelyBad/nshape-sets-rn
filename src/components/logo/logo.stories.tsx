import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import LogoLayout from "./logo.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Logo", () => {
const sample = text("Test Label", "default");
return <LogoLayout />;
});