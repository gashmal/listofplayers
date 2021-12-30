import React from "react";

import { globalStyles } from "../stylesheet/styles";
import { SafeAreaView } from "react-native";

const Page: React.FC = ({ children }) => {
  return <SafeAreaView style={globalStyles.container}>{children}</SafeAreaView>;
};

export default Page;
