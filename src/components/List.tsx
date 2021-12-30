import React from "react";
import {
  FormattedPlayer,
  useChampionship,
} from "../context/ChampionshipContext";
import { FlatList, ListRenderItem, View } from "react-native";
import { filterPlayers } from "../../utils/functions";
import { Results } from "./Results";
import { HeaderTitles, MemoElement } from "./ListElement";
import { globalStyles } from "../stylesheet/styles";

export const List = ({
  textFilter,
  selectedPositions,
}: {
  textFilter: string;
  selectedPositions: string[];
}) => {
  const { allPlayersList } = useChampionship();
  const filteredList = filterPlayers(
    allPlayersList,
    textFilter,
    selectedPositions,
  );

  const results = filteredList?.length;

  return (
    <View style={globalStyles.container}>
      <Results results={results} />
      <HeaderTitles />
      <FlatList
        renderItem={renderList}
        data={filteredList ?? []}
        initialNumToRender={200}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const keyExtractor = (item: FormattedPlayer) => item.id;
const renderList: ListRenderItem<FormattedPlayer> = ({ item }) => (
  <MemoElement key={item.id} {...item} />
);
