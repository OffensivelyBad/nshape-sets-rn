/**
 *
 * Main
 *
 */

import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {};

const MainLayout = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main</Text>
    </View>
  );
};

export default MainLayout;
