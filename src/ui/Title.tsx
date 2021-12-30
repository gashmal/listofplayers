import React from "react";
import { Text, TextProps } from "react-native";
import { globalStyles } from "../stylesheet/styles";

export const Title = (props: TextProps) => (
  <Text {...props} style={globalStyles.title}>
    {props.children}
  </Text>
);
