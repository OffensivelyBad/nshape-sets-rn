/**
 *
 * ActiveWorkout
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const ActiveWorkoutLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Active Workout</Text>
    </View>
  );
};

export default ActiveWorkoutLayout;
