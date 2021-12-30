import React from "react";
import { Text, TextProps } from "react-native";
import { globalStyles } from "../stylesheet/styles";

export const Body = (props: TextProps) => (
  <Text {...props} style={globalStyles.body}>
    {props.children}
  </Text>
);
