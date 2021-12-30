/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  // the test fails because of my goat png
  // https://github.com/facebook/jest/issues/2663
  renderer.create(<App />);
});
