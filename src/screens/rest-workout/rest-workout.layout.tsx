/**
 *
 * RestWorkout
 *
 */

import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/button";
import CircleTimer from "../../components/circle-timer";
import Detail from "../../components/detail";
import Logo from "../../components/logo";
import { Workout } from "../../models";
import { useColorStore } from "../../stores";
import styles from "./styles";

type Props = {
  workout: Workout;
};

const RestWorkoutLayout = ({ workout }: Props) => {
  const { colors } = useColorStore();
  const { sets, rest, currentSet } = workout;


  const onEndRest = useCallback(() => {
    // TODO: handle ending the rest period
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={[styles.time, { color: colors.text }]}>Total time:</Text>
      <Detail
        image={require('../../assets/Title-RestTime.png')}
      />
      <CircleTimer
        timeInSeconds={rest}
        startCountdown
        onCountdownComplete={onEndRest}
      />
      <Detail
        image={require('../../assets/Title-NextSet.png')}
        value={`${sets - currentSet} of ${sets}`}
      />
      <Button
        image={require('../../assets/Button-Skip.png')}
        onPress={onEndRest}
      />
    </View>
  );
};

export default RestWorkoutLayout;
