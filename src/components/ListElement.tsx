import React, { FC } from "react";
import { FormattedPlayer } from "../context/ChampionshipContext";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { Screens } from "../types/NavigationTypes";
import { Body } from "../ui/Body";
import { Title } from "../ui/Title";
import { globalStyles } from "../stylesheet/styles";

const ListElement: FC<FormattedPlayer> = ({
  id,
  name,
  position,
  quotation,
  starterRate,
  totalGoals,
  rating,
  jersey,
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate(Screens.PLAYER, {
          playerId: id,
        })
      }
    >
      <View style={globalStyles.elementContainer}>
        <View style={{ ...globalStyles.row, ...globalStyles.justifyCenter }}>
          <Image source={{ uri: jersey }} style={globalStyles.smallImage} />
          <Body>{name}</Body>
        </View>
        <View style={globalStyles.row}>
          <DataCell value={rating} />
          {/*<DataCell value={totalGoals.toString()} />*/}
          <DataCell value={position} />
          <DataCell value={starterRate} />
          <DataCell value={quotation} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const HeaderTitles = () => {
  return (
    <View style={globalStyles.headerContainer}>
      <View style={{ ...globalStyles.row, ...globalStyles.justifyCenter }}>
        <Title>Joueurs</Title>
      </View>
      <View style={globalStyles.row}>
        <TitleCell value={"note"} />
        {/*<TitleCell value={"buts"} />*/}
        <TitleCell value={"poste"} />
        <TitleCell value={"titu"} />
        <TitleCell value={"cote"} />
      </View>
    </View>
  );
};

const TitleCell = ({ value = "" }) => {
  return (
    <View style={globalStyles.cell}>
      <Title>{value}</Title>
    </View>
  );
};

const DataCell = ({ value = "" }) => {
  return (
    <View style={globalStyles.cell}>
      <Body>{value}</Body>
    </View>
  );
};

export const MemoElement = React.memo(ListElement, (prev, next) => {
  return prev.id === next.id;
});
