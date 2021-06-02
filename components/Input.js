// Input.js

import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Controller } from "react-hook-form";

export default function Input(props) {
  return (
    <View style={styles.wrapper}>
        <Controller
					control={props.control}
					render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.input, props.error && t.borderRed500, props.style]}
                        {...props}
                        onBlur={onBlur}
						onChangeText={value => onChange(value)}
						value={value}
                      />
					)}
					name={props.name}
					rules={{ required: true }}
					defaultValue=""
				/>
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

const styles = {
  wrapper: [t.selfStretch, t.mB5],
  input: [
    t.h11,
    t.border,
    t.selfStretch,
    t.p2,
    t.borderGray500,
    t.rounded,
    t.textBase,
    t.textGray700
  ],
  errorText: [t.mT1, t.textRed500]
};