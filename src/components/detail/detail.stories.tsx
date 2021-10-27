import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import DetailLayout from "./detail.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Detail", () => {
const sample = text("Test Label", "default");
return <DetailLayout />;
});