import { Player } from "../types/dataTypes";
import { useQuery } from "react-query";
import { fetchPlayerStats } from "../api/api";
import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import { CURRENT_YEAR } from "../../utils/globalVariables";
import { Title } from "../ui/Title";
import { Body } from "../ui/Body";
import { globalStyles } from "../stylesheet/styles";

export const PlayerStats = ({ playerId }: { playerId: Player["id"] }) => {
  const { playerStats, isLoading } = usePlayerStats(playerId);
  const [expended, setExpended] = React.useState(false);

  if (isLoading) {
    return (
      <Title>{`Loading Player Stats for ${CURRENT_YEAR} season...`}</Title>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => setExpended((value) => !value)}
      >
        <Body>{expended ? "Hide Stats" : "Show Stats"}</Body>
      </TouchableOpacity>
      {expended ? (
        <ScrollView>
          <Body>{JSON.stringify(playerStats)}</Body>
        </ScrollView>
      ) : null}
    </View>
  );
};
const usePlayerStats = (playerId: Player["id"]) => {
  const { data: playerStats, isLoading } = useQuery(["player", playerId], () =>
    fetchPlayerStats(playerId),
  );
  return { playerStats, isLoading };
};
