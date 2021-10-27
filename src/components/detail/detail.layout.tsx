/**
 *
 * Detail
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const DetailLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail</Text>
    </View>
  );
};

export default DetailLayout;
