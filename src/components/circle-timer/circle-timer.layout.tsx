/**
 *
 * CircleTimer
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const CircleTimerLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Circle Timer</Text>
    </View>
  );
};

export default CircleTimerLayout;
