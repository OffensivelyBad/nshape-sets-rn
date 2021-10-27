/**
 *
 * Timer
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const TimerLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timer</Text>
    </View>
  );
};

export default TimerLayout;
