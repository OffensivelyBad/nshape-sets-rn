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
  remainingSetsDescription: string;
  onSetEnd: () => void;
};

const Active = ({
  currentSet,
  remainingSetsDescription,
  onSetEnd
}: Props) => {
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
        image={require('../../../assets/Button-Rest.png')}
        onPress={onSetEnd}
      />
    </View>
  );
};

export default Active;
