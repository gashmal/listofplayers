import { TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../stylesheet/styles";
import { Body } from "../ui/Body";

export const PositionsList = ({
  togglePosition,
  selectedPositions,
}: {
  togglePosition: (position: string) => void;
  selectedPositions: string[];
}) => {
  const positions = ["G", "D", "L", "MD", "MO", "A"] as const;
  return (
    <View style={globalStyles.positionContainer}>
      {positions.map((position) => (
        <PositionElement
          key={position}
          position={position}
          togglePosition={togglePosition}
          isSelected={selectedPositions.includes(position)}
        />
      ))}
    </View>
  );
};

const PositionElement = ({
  position,
  togglePosition,
  isSelected,
}: {
  position: string;
  togglePosition: (position: string) => void;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity onPress={() => togglePosition(position)}>
      <View
        style={[globalStyles.card, isSelected && globalStyles.selectedCard]}
      >
        <Body>{position}</Body>
      </View>
    </TouchableOpacity>
  );
};
