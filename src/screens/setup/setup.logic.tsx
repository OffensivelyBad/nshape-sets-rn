/**
*
* Main
*
*/

import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useEffect, useState } from "react";
import Base from "../../components/base";
import { NavigationScreens, Workout } from "../../models";
import { useWorkoutStore } from "../../stores";
import SetupLayout from "./setup.layout";

type Props = {};

const MainLogic = (_props: Props) => {
  const { navigate } = useNavigation();
  const { workout, setWorkout, hydrated } = useWorkoutStore();
  const [setsValue, setSetsValue] = useState(0);
  const [restValue, setRestValue] = useState(0);

  useEffect(() => {
    if (hydrated) {
      if (workout) {
        const { sets, rest } = workout;
        setSetsValue(sets);
        setRestValue(rest);
      }
    }
  }, [hydrated, workout]);

  const startWorkout = useCallback(() => {
    const workout: Workout = {
      sets: setsValue,
      rest: restValue
    };

    setWorkout(workout);
    navigate(NavigationScreens.Workout, { workout });
  }, [setsValue, restValue, setWorkout, navigate]);

  if (setsValue === 0) {
    return <Base />
  }

  return (
    <SetupLayout
      setsValue={setsValue}
      onNewSets={setSetsValue}
      restValue={restValue}
      onNewRest={setRestValue}
      onStartPressed={startWorkout}
    />
  );
};

export default MainLogic;