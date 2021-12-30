import React from "react";
import { toggle } from "../../utils/functions";
import { PositionsList } from "../components/PositionsList";
import { SearchPlayer } from "../components/SearchPlayer";
import { List } from "../components/List";
import Page from "../components/Page";

const PlayersList = () => {
  const [textFilter, setTextFilter] = React.useState("");
  const [selectedPositions, setSelectedPositions] = React.useState<string[]>(
    [],
  );
  const togglePosition = (position: string) => {
    setSelectedPositions((state) => toggle(state, position));
  };

  return (
    <Page>
      <SearchPlayer value={textFilter} onChangeText={setTextFilter} />
      <PositionsList
        togglePosition={togglePosition}
        selectedPositions={selectedPositions}
      />
      <List textFilter={textFilter} selectedPositions={selectedPositions} />
    </Page>
  );
};

export default PlayersList;
