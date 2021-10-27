/**
 *
 * Workout
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const WorkoutLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout</Text>
    </View>
  );
};

export default WorkoutLayout;
