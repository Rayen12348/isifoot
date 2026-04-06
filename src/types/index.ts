export type Screen =
  | "home"
  | "login"
  | "register"
  | "dashboard"
  | "reserve"
  | "planning"
  | "fixtures"
  | "profile";

export interface User {
  id: string;
  name: string;
  email: string;
  promo: string;
}

export interface Reservation {
  id: string;
  date: string;
  time: string;
  userId: string;
  userName: string;
  players: string[];
}

export interface Fixture {
  id: string;
  date: string;
  time: string;
  teamA: string[];
  teamB: string[];
  maxPlayers: number;
}
