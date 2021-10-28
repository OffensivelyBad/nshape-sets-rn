/**
*
* Detail
*
*/

import React from "react";
import { Text, View, Image } from "react-native";
import { useColorStore } from "../../stores";
import styles from "./styles";

type Props = {
  image: any;
  value: string | number;
};

const Detail = ({ image, value }: Props) => {
  const { colors } = useColorStore();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={[styles.text, { color: colors.text }]}>{value}</Text>
    </View>
  );
};

export default Detail;