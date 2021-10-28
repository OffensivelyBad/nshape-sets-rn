/**
*
* Button
*
*/

import React from "react";
import { Image, Pressable, Text } from "react-native";
import styles from "./styles";

type Props = {
  title?: string;
  image?: any;
  onPress: () => void;
};

const Button = ({ title, image, onPress }: Props) => {

  return (
    <Pressable onPress={onPress}>
      {image ? <Image style={styles.image} source={image} resizeMode='contain' /> : <Text>{title}</Text>}
    </Pressable>
  );
};

export default Button;