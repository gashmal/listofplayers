import { Player } from "./dataTypes";
import { RouteProp } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

export enum Screens {
  PLAYER = "player",
  PLAYERS_LIST = "players_list",
}

export type StackParamList = {
  player: { playerId: Player["id"] };
  players_list: undefined;
};

export type PlayerRouteProp = RouteProp<StackParamList, Screens.PLAYER>;
