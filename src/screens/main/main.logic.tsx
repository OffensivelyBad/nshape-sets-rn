/**
*
* Main
*
*/

import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import { NavigationScreens, Workout } from "../../models";
import { useWorkoutStore } from "../../stores";
import MainLayout from "./main.layout";

type Props = {};

const MainLogic = (_props: Props) => {
  const { navigate } = useNavigation();
  const { workout: { sets, rest }, setWorkout } = useWorkoutStore();
  const [setsValue, setSetsValue] = useState(sets);
  const [restValue, setRestValue] = useState(rest);

  const startWorkout = useCallback(() => {
    const workout: Workout = {
      sets: setsValue,
      rest: restValue
    };

    setWorkout(workout);
    navigate(NavigationScreens.Workout, { workout });
  }, [setsValue, restValue, navigate]);

  return (
    <MainLayout
      setsValue={setsValue}
      onNewSets={setSetsValue}
      restValue={restValue}
      onNewRest={setRestValue}
      onStartPressed={startWorkout}
    />
  );
};

export default MainLogic;