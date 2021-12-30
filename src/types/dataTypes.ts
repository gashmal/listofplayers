export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: number;
  ultraPosition: UltraPosition;
  quotation: number;
  clubId: string;
  stats: Stats;
}

export type UltraPosition = 10 | 20 | 21 | 30 | 31 | 40;

export enum Positions {
  "G" = 10,
  "D" = 20,
  "L" = 21,
  "MD" = 30,
  "MO" = 31,
  "A" = 40,
}

export interface PlayerSeasonStats {
  id: string;
  type: string;
  championships: Record<ChampionshipEnum, ChampionshipStats>;
  position: number;
  ultraPosition: UltraPosition;
}

export interface ChampionshipStats {
  clubs: Record<Club["id"], ClubStats>;
  total: TotalStats;
  keySeasonStats: KeySeasonStats;
  percentRanks: KeySeasonStats;
}

export interface KeySeasonStats {
  quotation: number;
  averageRating: number;
  percentageStarter: number;
  ratioGoals: number;
  ratioScoringAtt: number;
  ratioBigChanceCreated: number;
}

export interface ClubStats {
  matches: Match[];
  quotations: Quotation[];
  stats: TotalStats;
}

export interface Quotation {
  quotation: number;
  date: Date;
}

export type Players = Player[];

export interface Stats {
  averageRating: number;
  totalGoals: number;
  totalMatches: number;
  totalStartedMatches: number;
  totalPlayedMatches: number;
  matches: Match[];
  id: string;
}

export interface Match {
  playerClubId: string;
  matchId: string;
  gameWeekNumber: number;
  date: Date;
  home: Score;
  away: Score;
  playerPerformance: PlayerPerformance;
}

export interface Score {
  clubId: string;
  score: number;
}

export interface PlayerPerformance {
  status: number;
  rating?: number;
  goals?: number;
  ownGoals?: number;
  minutesPlayed?: number;
}

export enum ChampionshipEnum {
  "L1" = "1",
  "PL" = "2",
  "LIGA" = "3",
  "L2" = "4",
  "SERIE_A" = "5",
  "LDC" = "6",
}

export interface Club {
  championships: Record<ChampionshipEnum, Championship>;
  id: string;
  name: LocalizedName;
  shortName: string;
  defaultJerseyUrl: string;
}

export type Clubs = Record<Club["id"], Club>;

export type Year = string;
export type Url = string;

export interface Championship {
  jerseys: Record<Year, Url>;
  active: boolean;
}

export interface LocalizedName {
  "fr-FR": string;
  "en-GB": string;
  "es-ES": string;
}

export interface AllStats {
  averageRating: number;
  totalAccurateCross: number;
  totalAccurateLongPass: number;
  totalAccuratePass: number;
  totalAccuratePassBackZone: number;
  totalAccuratePassFwdZone: number;
  totalBigChanceCreated: number;
  totalBigChanceMissed: number;
  totalCleanSheet: number;
  totalContest: number;
  totalCross: number;
  totalDuel: number;
  totalFouled: number;
  totalFouls: number;
  totalGoalAssist: number;
  totalGoals: number;
  totalGoalsConceded: number;
  totalIntercept: number;
  totalLongPass: number;
  totalLostBall: number;
  totalMinutesPlayed: number;
  totalMistake: number;
  totalOwnGoals: number;
  totalPassBackZone: number;
  totalPassFwdZone: number;
  totalPasses: number;
  totalPenalties: number;
  totalPenaltiesScored: number;
  totalPlayedMatches: number;
  totalRedCard: number;
  totalScoringAtt: number;
  totalShotOffTarget: number;
  totalStartedMatches: number;
  totalTackle: number;
  totalTouches: number;
  totalWonContest: number;
  totalWonDuel: number;
  totalYellowCard: number;
}

export type TotalStats = Partial<AllStats>;
