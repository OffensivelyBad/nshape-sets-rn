/**
*
* Base
*
*/

import React, { ReactNode } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { useColorStore } from "../../stores";

type Props = {
  children: ReactNode;
};

const Base = ({ children }: Props) => {
  const { colors } = useColorStore();

  return (
    <LinearGradient colors={[colors.backgroundTop, colors.backgroundBottom]} style={{ width: '100%', height: '100%', position: 'absolute' }}>
      {children}
    </LinearGradient>
  );
};

export default Base;