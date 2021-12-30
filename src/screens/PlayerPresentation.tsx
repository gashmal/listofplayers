import React from "react";
import { useRoute } from "@react-navigation/native";
import { PlayerRouteProp } from "../types/NavigationTypes";
import { PlayerCard } from "../components/PlayerCard";
import { PlayerStats } from "../components/PlayerStats";
import Page from "../components/Page";

const PlayerPresentation = () => {
  const playerId = useId();

  return (
    <Page>
      <PlayerCard playerId={playerId} />
      <PlayerStats playerId={playerId} />
    </Page>
  );
};

const useId = () => {
  const {
    params: { playerId = "" },
  } = useRoute<PlayerRouteProp>();
  return playerId;
};

export default PlayerPresentation;
