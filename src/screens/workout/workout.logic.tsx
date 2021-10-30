/**
*
* Workout
*
*/

import React, { useCallback, useEffect, useState } from "react";
import { useTimer } from "use-timer";
import { Workout } from "../../models";
import { getElapsedTime, getNextSetDescription, getRemainingSetsDescription } from "./util";
import WorkoutLayout from "./workout.layout";

type Props = {
  workout: Workout
};

const WorkoutLogic = ({ workout: { sets, rest } }: Props) => {
  const { start, time } = useTimer();
  const [currentSet, setCurrentSet] = useState(1);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    start()
  }, [start]);

  const onRestEnd = useCallback(() => {
    setResting(false);
    setCurrentSet(set => set + 1);
  }, []);

  const onSetEnd = useCallback(() => {
    setResting(true);
  }, []);

  return <WorkoutLayout
    currentSet={currentSet}
    remainingSetsDescription={getRemainingSetsDescription(currentSet, sets)}
    nextSetsDescription={getNextSetDescription(currentSet, sets)}
    elapsedTime={getElapsedTime(time)}
    restSeconds={rest}
    resting={resting}
    onRestEnd={onRestEnd}
    onSetEnd={onSetEnd}
  />
};

export default WorkoutLogic;