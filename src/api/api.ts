import axios from "axios";
import { Clubs, Player, Players, PlayerSeasonStats } from "../types/dataTypes";
import {
  CURRENT_CHAMPIONCHIP,
  CURRENT_YEAR,
} from "../../utils/globalVariables";

const BASE_URL = "https://api.mpg.football/api/data/";

const CLUB_LIST_ENDPOINT: string = "championship-clubs";

// PLAYER_LIST_ENDPOINT should be used with the current championship
// ex : https://api.mpg.football/api/data/championship-players-pool/1 for Ligue 1
const PLAYER_LIST_ENDPOINT: string = "championship-players-pool/";

// PLAYER_DETAILS_ENDPOINT should be used with the player id and the year
// ex : https://api.mpg.football/api/data/championship-player-stats/mpg_championship_player_100632/2021
const PLAYER_DETAILS_ENDPOINT: string = "championship-player-stats/";

axios.defaults.baseURL = BASE_URL;

export const fetchClubList = async (): Promise<Clubs> => {
  const { data } = await axios.get(CLUB_LIST_ENDPOINT);
  return data?.championshipClubs ?? {};
};

export const fetchPlayers = async (): Promise<Players> => {
  const { data } = await axios.get(PLAYER_LIST_ENDPOINT + CURRENT_CHAMPIONCHIP);
  return data?.poolPlayers ?? [];
};

export const fetchPlayerStats = async (
  playerID: Player["id"],
): Promise<PlayerSeasonStats> => {
  const { data } = await axios.get(
    PLAYER_DETAILS_ENDPOINT + playerID + "/" + CURRENT_YEAR,
  );
  return data;
};
