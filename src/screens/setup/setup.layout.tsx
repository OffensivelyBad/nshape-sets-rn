/**
 *
 * Main
 *
 */

import * as React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Base from "../../components/base";
import Button from "../../components/button";
import Logo from "../../components/logo";
import SliderInput from "../../components/slider-input";
import styles from "./styles";

type Props = {
  setsValue: number;
  onNewSets: (sets: number) => void;
  restValue: number;
  onNewRest: (rest: number) => void;
  onStartPressed: () => void;
};

const SetupLayout = ({ setsValue, onNewSets, restValue, onNewRest, onStartPressed }: Props) => {
  return (
    <Base>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
      >
        <KeyboardAvoidingView style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Logo />
          <SliderInput
            initialValue={setsValue}
            minimumValue={1}
            maximumValue={100}
            image={require("../../assets/Title-Sets.png")}
            onValueSet={onNewSets}
          />
          <SliderInput
            initialValue={restValue}
            minimumValue={1}
            maximumValue={300}
            image={require("../../assets/Title-Rest.png")}
            onValueSet={onNewRest}
          />
          <Button
            image={require("../../assets/Button-Start.png")}
            onPress={onStartPressed}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </Base>
  );
};

export default SetupLayout;
