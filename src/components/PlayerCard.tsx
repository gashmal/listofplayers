import { Club, Player } from "../types/dataTypes";
import { Image, View } from "react-native";
import React from "react";
import { useChampionship } from "../context/ChampionshipContext";
import { Title } from "../ui/Title";
import { Body } from "../ui/Body";
import { LANGUAGE } from "../../utils/globalVariables";
import { globalStyles } from "../stylesheet/styles";

export const PlayerCard = ({ playerId }: { playerId: Player["id"] }) => {
  const { player, club } = usePlayer(playerId);

  return (
    <View style={globalStyles.alignCenter}>
      {club ? <DisplayClub club={club} /> : null}
      {player ? <DisplayPlayer player={player} /> : null}
    </View>
  );
};

const DisplayClub = ({ club }: { club: Club }) => {
  return (
    <>
      <Title>{club?.name?.[LANGUAGE] ?? ""}</Title>
      <Image
        source={{ uri: club?.defaultJerseyUrl }}
        style={globalStyles.image}
      />
    </>
  );
};

const DisplayPlayer = ({ player }: { player: Player }) => {
  return (
    <>
      <Title>Prénom</Title>
      <Body>{player?.firstName ?? "-"}</Body>
      <Title>Nom</Title>
      <Body>{player?.lastName ?? "-"}</Body>
      <Title>Valeur</Title>
      <Body>{player?.quotation ?? "-"}</Body>
      <Title>Note Moyenne</Title>
      <Body>{player?.stats?.averageRating?.toFixed(2) ?? "-"}</Body>
    </>
  );
};

const usePlayer = (playerId: Player["id"]) => {
  const { players, clubs } = useChampionship();
  const player = players?.find((p) => p.id === playerId);
  const club = player && clubs?.[player?.clubId];
  return { player, club };
};
