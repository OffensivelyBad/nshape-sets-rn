/**
*
* Logo
*
*/

import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const Logo = () => {
  return <Image
    style={styles.image}
    source={require('../../assets/Banner.png')}
    resizeMode="contain"
  />
};

export default Logo;
