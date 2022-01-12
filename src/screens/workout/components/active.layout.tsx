/**
 *
 * Active
 *
 */

import React from "react";
import { View } from "react-native";
import Button from "../../../components/button";
import Detail from "../../../components/detail";
import styles from "./styles";

type Props = {
  currentSet: number;
  totalSets: number;
  remainingSetsDescription: string;
  onSetEnd: () => void;
};

const Active = ({
  currentSet,
  totalSets,
  remainingSetsDescription,
  onSetEnd
}: Props) => {
  const restButton = currentSet === totalSets ? require('../../../assets/Button-Done.png') : require('../../../assets/Button-Rest.png');
  return (
    <View style={styles.container}>
      <Detail
        image={require('../../../assets/Title-CurrentSet.png')}
        value={currentSet}
      />
      <Detail
        image={require('../../../assets/Title-RemainingSets.png')}
        value={remainingSetsDescription}
      />
      <Button
        image={restButton}
        onPress={onSetEnd}
      />
    </View>
  );
};

export default Active;
