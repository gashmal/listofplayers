import { ImageBackground, StyleSheet } from "react-native";
import * as React from "react";

export const FakeSplashScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/goat.png")}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
