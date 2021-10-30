/**
 *
 * Workout
 *
 */

import React from "react";
import { Text, View } from "react-native";
import Base from "../../components/base";
import Logo from "../../components/logo";
import { useColorStore } from "../../stores";
import Active from "./components/active.layout";
import Rest from "./components/rest.layout";
import styles from "./styles";

type Props = {
  currentSet: number;
  remainingSetsDescription: string;
  nextSetsDescription: string;
  elapsedTime: string;
  restSeconds: number;
  resting: boolean;
  onRestEnd: () => void;
  onSetEnd: () => void;
};

const WorkoutLayout = ({
  currentSet,
  remainingSetsDescription,
  nextSetsDescription,
  elapsedTime,
  restSeconds,
  resting,
  onRestEnd,
  onSetEnd
}: Props) => {
  const { colors } = useColorStore();

  return (
    <Base>
      <View style={styles.container}>
        <Logo />
        <Text style={[styles.time, { color: colors.text }]}>Total time: {elapsedTime}</Text>
        {resting ?
          <Rest
            restSeconds={restSeconds}
            nextSetDescription={nextSetsDescription}
            onRestEnd={onRestEnd}
          /> :
          <Active
            currentSet={currentSet}
            remainingSetsDescription={remainingSetsDescription}
            onSetEnd={onSetEnd}
          />
        }
      </View>
    </Base>
  );
};

export default WorkoutLayout;
