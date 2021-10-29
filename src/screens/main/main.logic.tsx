/**
*
* Main
*
*/

import React, { useCallback, useState } from "react";
import MainLayout from "./main.layout";

type Props = {};

const MainLogic = (_props: Props) => {
  const [setsValue, setSetsValue] = useState(5);
  const [restValue, setRestValue] = useState(6);

  const startWorkout = useCallback(() => {
    /*
      create a workout model
      present the workout screen passing in the workout model
    */
  }, [setsValue, restValue]);

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