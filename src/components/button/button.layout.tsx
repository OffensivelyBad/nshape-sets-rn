/**
 *
 * Button
 *
 */

import * as React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";

type Props = {};

const ButtonLayout = (_props: Props) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.header}>Button</Text>
    </Pressable>
  );
};

export default ButtonLayout;
