/**
*
* Main
*
*/

import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import { NavigationScreens, Workout } from "../../models";
import MainLayout from "./main.layout";

type Props = {};

const MainLogic = (_props: Props) => {
  const { navigate } = useNavigation();
  const [setsValue, setSetsValue] = useState(5);
  const [restValue, setRestValue] = useState(6);

  const startWorkout = useCallback(() => {
    /*
      create a workout model
      present the workout screen passing in the workout model
    */
    const workout: Workout = {
      sets: setsValue,
      rest: restValue
    }
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