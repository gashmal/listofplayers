import { Clubs, Player, Players, Positions } from "../src/types/dataTypes";
import { FormattedPlayer } from "../src/context/ChampionshipContext";

// formatPlayers
export const formatPlayers = (players: Players, clubs: Clubs) => {
  return players.map((player) => formatPlayer(player, clubs)) ?? [];
};

export const getFullName = (player: Partial<Player>) => {
  if (player.firstName && player.lastName) {
    return `${player.firstName} ${player.lastName}`;
  } else if (player.lastName) {
    return player.lastName;
  } else if (player.firstName) {
    return player.firstName;
  } else {
    return "🤷";
  }
};

const calcStarterRate = (started: number, total: number) => {
  if (started > 0 && total > 0) {
    return Math.round((started / total) * 100).toString() + "%";
  }
  return "-";
};

const formatPlayer = (player: Player, clubs: Clubs) => {
  return {
    id: player.id,
    jersey: clubs?.[player?.clubId]?.defaultJerseyUrl ?? "",
    name: getFullName(player),
    rating: player?.stats?.averageRating?.toFixed(2) ?? "-",
    totalGoals: player?.stats?.totalGoals ?? 0,
    position: Positions[player?.ultraPosition] ?? "🤷",
    starterRate: calcStarterRate(
      player?.stats.totalStartedMatches,
      player?.stats.totalMatches,
    ),
    quotation: player?.quotation.toString() ?? "-",
  };
};

// filters
export const filterPlayers = (
  players: FormattedPlayer[],
  textFilter: string,
  selectedPositions: string[],
) =>
  players.filter(
    (player) =>
      includesName(player.name, textFilter) &&
      includesPosition(player.position, selectedPositions),
  );

const includesName = (name: string, textFilter: string) =>
  name.toLowerCase().includes(textFilter.toLowerCase());

const includesPosition = (position: string, selectedPositions: string[]) =>
  selectedPositions.length === 0 || selectedPositions.includes(position);

export const toggle = (state: string[], element: string) => {
  if (state.includes(element)) {
    return state.filter((p) => p !== element);
  } else {
    return [...state, element];
  }
};
