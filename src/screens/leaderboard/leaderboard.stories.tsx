import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import LeaderboardLayout from "./leaderboard.layout";

storiesOf("UI", module)
.addDecorator(withKnobs)
.add("Leaderboard", () => {
const sample = text("Test Label", "default");
return <LeaderboardLayout />;
});