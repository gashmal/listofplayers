import { useQuery } from "react-query";
import React, { createContext, FC, useContext } from "react";

import { fetchClubList, fetchPlayers } from "../api/api";
import { Clubs, Players } from "../types/dataTypes";
import { formatPlayers } from "../../utils/functions";

type ContextType = {
  clubs: Clubs | undefined;
  players: Players | undefined;
  isReady: boolean;
  allPlayersList: FormattedPlayer[];
};

export const ChampionshipContext = createContext<ContextType>({
  clubs: {},
  players: [],
  isReady: false,
  allPlayersList: [],
});

export const ChampionshipProvider: FC = ({ children }) => {
  const { data: clubs, isSuccess: clubSuccess } = useQuery(
    "clubList",
    fetchClubList,
  );
  const { data: players, isSuccess: playerSuccess } = useQuery(
    "playersList",
    fetchPlayers,
  );

  const allPlayersList = formatPlayers(players ?? [], clubs ?? {});

  return (
    <ChampionshipContext.Provider
      value={{
        clubs,
        players,
        isReady: clubSuccess && playerSuccess,
        allPlayersList,
      }}
    >
      {children}
    </ChampionshipContext.Provider>
  );
};

export type FormattedPlayer = {
  id: string;
  jersey: string;
  name: string;
  rating: string;
  totalGoals: number;
  position: string;
  starterRate: string;
  quotation: string;
};

export const useChampionship = () => useContext(ChampionshipContext);
