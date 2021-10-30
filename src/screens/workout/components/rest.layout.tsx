/**
 *
 * Rest
 *
 */

import React from "react";
import { View } from "react-native";
import Button from "../../../components/button";
import CircleTimer from "../../../components/circle-timer";
import Detail from "../../../components/detail";
import styles from "./styles";

type Props = {
  restSeconds: number;
  nextSetDescription: string;
  onRestEnd: () => void;
};

const Rest = ({
  restSeconds,
  nextSetDescription,
  onRestEnd
}: Props) => {
  return (
    <View style={styles.container}>
      <Detail
        image={require('../../../assets/Title-RestTime.png')}
      />
      <CircleTimer
        timeInSeconds={restSeconds}
        startCountdown
        onCountdownComplete={onRestEnd}
      />
      <Detail
        image={require('../../../assets/Title-NextSet.png')}
        value={nextSetDescription}
      />
      <Button
        image={require('../../../assets/Button-Skip.png')}
        onPress={onRestEnd}
      />
    </View>
  );
};

export default Rest;
