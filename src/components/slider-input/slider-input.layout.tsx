/**
 *
 * SliderInput
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const SliderInputLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slider Input</Text>
    </View>
  );
};

export default SliderInputLayout;
