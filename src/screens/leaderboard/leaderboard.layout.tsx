/**
*
* Leaderboard
*
*/

import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const LeaderboardLayout = (_props: Props) => {
return (
<View style={styles.container}>
  <Text style={styles.header}>Leaderboard</Text>
</View>
);
};

export default LeaderboardLayout;