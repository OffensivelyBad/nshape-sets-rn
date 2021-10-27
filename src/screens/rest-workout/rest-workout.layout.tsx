/**
 *
 * RestWorkout
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const RestWorkoutLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rest Workout</Text>
    </View>
  );
};

export default RestWorkoutLayout;
