import { TextInput } from "react-native";
import React from "react";
import { globalStyles } from "../stylesheet/styles";

interface SearchPlayerProps {
  value: string;
  onChangeText: (value: ((prevState: string) => string) | string) => void;
}

export const SearchPlayer = ({
  onChangeText,
  value = "",
}: SearchPlayerProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const style = {
    ...globalStyles.input,
    ...(isFocused ? globalStyles.focusedInput : {}),
  };

  return (
    <TextInput
      style={style}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      onChangeText={onChangeText}
      placeholder={"Rechercher un joueur"}
      clearButtonMode={"always"}
    />
  );
};
