/**
*
* Workout
*
*/

import React, { useCallback, useEffect, useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { useTimer } from "use-timer";
import { NavigationPropList, NavigationScreens } from "../../models";
import { getElapsedTime, getNextSetDescription, getRemainingSetsDescription } from "./util";
import WorkoutLayout from "./workout.layout";
import { WorkoutProps } from ".";
import { Alert, AlertButton } from "react-native";
import { useNavigation } from "@react-navigation/core";

type WorkoutNavigationProps = StackNavigationProp<NavigationPropList, NavigationScreens.Workout>;

type Props = {
  route: { params: WorkoutProps };
  navigation: WorkoutNavigationProps;
};

const WorkoutLogic = ({ route: { params: { workout: { rest, sets } } } }: Props) => {
  const navigation = useNavigation();
  const { start, pause, time } = useTimer();
  const [currentSet, setCurrentSet] = useState(1);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    start()
  }, [start]);

  const onRestEnd = useCallback(() => {
    setResting(false);
    setCurrentSet(set => set + 1);
  }, []);

  const onBackPressed = useCallback(() => {
    const doneButton: AlertButton = {
      text: "Done!",
      onPress: () => navigation.goBack(),
      style: "destructive"
    }
    const continueButton: AlertButton = {
      text: "Keep going!",
      style: "default"
    }
    Alert.alert("Are you done?", undefined, [continueButton, doneButton]);
  }, [navigation]);

  const onWorkoutEnd = useCallback(() => {
    pause();
    const formattedTime = getElapsedTime(time);
    const button: AlertButton = {
      text: "Done!",
      onPress: () => navigation.goBack()
    }
    Alert.alert("Done!", `You completed all sets in ${formattedTime}.`, [button]);
  }, [navigation, pause, time]);

  const onSetEnd = useCallback(() => {
    if (currentSet >= sets) {
      // Workout is over
      onWorkoutEnd();
    } else {
      setResting(true);
    }
  }, [currentSet, onWorkoutEnd, sets]);

  return <WorkoutLayout
    currentSet={currentSet}
    remainingSetsDescription={getRemainingSetsDescription(currentSet, sets)}
    nextSetsDescription={getNextSetDescription(currentSet, sets)}
    elapsedTime={getElapsedTime(time)}
    restSeconds={rest}
    resting={resting}
    onRestEnd={onRestEnd}
    onSetEnd={onSetEnd}
    onBackPressed={onBackPressed}
  />
};

export default WorkoutLogic;