/**
*
* SliderInput
*
*/

import React, { useCallback, useState } from "react";
import Slider from '@react-native-community/slider';
import { Image, TextInput, View } from "react-native";
import { useColorStore } from "../../stores";
import styles from "./styles";

type Props = {
  initialValue?: number;
  maximumValue?: number;
  minimumValue?: number;
  image?: any;
  onValueSet?: (value: number) => void;
};

const SliderInput = ({ initialValue = 1, onValueSet, maximumValue = 100, minimumValue = 1, image }: Props) => {
  const { colors } = useColorStore();
  const [value, setValue] = useState(initialValue);

  const onChangeTextValue = useCallback(text => {
    setValue(+text);
  }, []);

  const onEndChangeValue = useCallback(() => {
    const newValue = value > maximumValue ? maximumValue : value < minimumValue ? minimumValue : value;
    onValueSet ? onValueSet(newValue) : null;
    setValue(newValue);
  }, [value, maximumValue, minimumValue, onValueSet]);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.secondary}
        thumbTintColor={colors.primary}
        onSlidingComplete={onValueSet}
        value={value}
        onValueChange={setValue}
        step={1}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: colors.inputText, borderColor: colors.primary }]}
          value={`${value}`}
          onChangeText={onChangeTextValue}
          onEndEditing={onEndChangeValue}
          keyboardType="numeric"
        />
        {image ? <Image
          style={styles.image}
          source={image}
          resizeMode="contain"
        /> : null}
      </View>
    </View>
  );
};

export default SliderInput;
