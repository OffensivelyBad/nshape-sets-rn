/**
 *
 * Workout
 *
 */

import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import style from "../../../storybook/stories/CenterView/style";
import Button from "../../components/button";
import Detail from "../../components/detail";
import Logo from "../../components/logo";
import { Workout } from "../../models";
import { useColorStore } from "../../stores";
import styles from "./styles";

type Props = {
  workout: Workout
};

const WorkoutLayout = ({ workout }: Props) => {
  const { colors } = useColorStore();
  const { sets, rest } = workout;
  const [currentSet, setCurrentSet] = useState(1);
  const [remainingSets, setRemainingSets] = useState(sets);
  const [totalTime, setTotalTime] = useState('00:00');

  const onSkipSet = useCallback(() => {
    // TODO: skip the set
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={[styles.time, { color: colors.text }]}>Total time: {totalTime}</Text>
      <Detail
        image={require('../../assets/Title-CurrentSet.png')}
        value={currentSet}
      />
      <Detail
        image={require('../../assets/Title-RemainingSets.png')}
        value={remainingSets}
      />
      <Button
        image={require('../../assets/Button-Rest.png')}
        onPress={onSkipSet}
      />
    </View>
  );
};

export default WorkoutLayout;
