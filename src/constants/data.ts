import { Reservation, Fixture, Screen } from "../types";

export const INITIAL_RESERVATIONS: Reservation[] = [
  { id: "r1", date: "2026-03-25", time: "08:00", userId: "u1", userName: "Dhia Bejaoui",   players: ["Dhia Bejaoui", "Rayen Ben Maaoui"] },
  { id: "r2", date: "2026-03-25", time: "10:00", userId: "u2", userName: "Ali Gharbi",     players: ["Ali Gharbi"] },
  { id: "r3", date: "2026-03-26", time: "14:00", userId: "u3", userName: "Mohamed Slim",   players: ["Mohamed Slim", "Youssef Triki"] },
  { id: "r4", date: "2026-03-26", time: "16:00", userId: "u4", userName: "Nour Karray",    players: ["Nour Karray"] },
  { id: "r5", date: "2026-03-27", time: "09:00", userId: "u5", userName: "Amine Jabeur",   players: ["Amine Jabeur", "Rami Sfar", "Khalil Dridi"] },
];

export const INITIAL_FIXTURES: Fixture[] = [
  { id: "f1", date: "2026-03-25", time: "18:00", teamA: ["Dhia B.", "Rayen BM.", "Ali G."], teamB: ["Nour K.", "Amine J."], maxPlayers: 5 },
  { id: "f2", date: "2026-03-26", time: "17:00", teamA: ["Mohamed S.", "Youssef T."],       teamB: ["Rami S."],             maxPlayers: 5 },
  { id: "f3", date: "2026-03-27", time: "19:00", teamA: ["Khalil D."],                      teamB: [],                      maxPlayers: 5 },
];

export const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
];

export const NEXT_DAYS = [
  "2026-03-25", "2026-03-26", "2026-03-27",
  "2026-03-28", "2026-03-29", "2026-03-30", "2026-03-31",
];

export const NAV_ITEMS: { icon: string; label: string; screen: Screen }[] = [
  { icon: "🏠", label: "Home",     screen: "dashboard" },
  { icon: "📅", label: "Planning", screen: "planning"  },
  { icon: "🏟️", label: "Reserve",  screen: "reserve"   },
  { icon: "⚔️", label: "Fixtures", screen: "fixtures"  },
  { icon: "👤", label: "Profile",  screen: "profile"   },
];
