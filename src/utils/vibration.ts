import React from 'react';
import { Vibration } from 'react-native';

const Vibrate = (count: number) => {
  const pattern = new Array(count).fill(1000);
  Vibration.vibrate(pattern);
};

export default Vibrate;
