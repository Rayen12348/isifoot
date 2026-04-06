import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { Screen, User, Reservation, Fixture } from "./src/types";
import { INITIAL_RESERVATIONS, INITIAL_FIXTURES } from "./src/constants/data";
import { C } from "./src/constants/colors";
import { styles } from "./src/styles";
import { BottomNav } from "./src/components";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  PlanningScreen,
  ReserveScreen,
  FixturesScreen,
  ProfileScreen,
} from "./src/screens";

const AUTHED_SCREENS: Screen[] = ["dashboard", "planning", "reserve", "fixtures", "profile"];

export default function App() {
  const [screen,       setScreen]       = useState<Screen>("home");
  const [user,         setUser]         = useState<User | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [fixtures,     setFixtures]     = useState<Fixture[]>(INITIAL_FIXTURES);

  const navigate = (s: Screen) => setScreen(s);

  // ── Auth handlers ────────────────────────────────────────────────────────────
  const handleLogin = (u: User) => {
    setUser(u);
    setScreen("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setScreen("home");
  };

  // ── Data handlers ────────────────────────────────────────────────────────────
  const handleAddReservation = (r: Reservation) =>
    setReservations((prev) => [...prev, r]);

  const handleJoinFixture = (fixtureId: string, team: "A" | "B") => {
    if (!user) return;
    setFixtures((prev) =>
      prev.map((f) => {
        if (f.id !== fixtureId) return f;
        const shortName = user.name.split(" ").map((p) => p[0] + ".").join("");
        if (team === "A" && f.teamA.length < f.maxPlayers)
          return { ...f, teamA: [...f.teamA, shortName] };
        if (team === "B" && f.teamB.length < f.maxPlayers)
          return { ...f, teamB: [...f.teamB, shortName] };
        return f;
      })
    );
  };

  const showNav = !!user && AUTHED_SCREENS.includes(screen);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />

      {screen === "home"      && <HomeScreen     navigate={navigate} />}
      {screen === "login"     && <LoginScreen    navigate={navigate} onLogin={handleLogin} />}
      {screen === "register"  && <RegisterScreen navigate={navigate} onLogin={handleLogin} />}

      {screen === "dashboard" && user && (
        <DashboardScreen navigate={navigate} user={user} reservations={reservations} />
      )}
      {screen === "planning" && user && (
        <PlanningScreen navigate={navigate} reservations={reservations} />
      )}
      {screen === "reserve" && user && (
        <ReserveScreen
          navigate={navigate}
          user={user}
          reservations={reservations}
          onAddReservation={handleAddReservation}
        />
      )}
      {screen === "fixtures" && user && (
        <FixturesScreen
          navigate={navigate}
          user={user}
          fixtures={fixtures}
          onJoin={handleJoinFixture}
        />
      )}
      {screen === "profile" && user && (
        <ProfileScreen
          navigate={navigate}
          user={user}
          reservations={reservations}
          onLogout={handleLogout}
        />
      )}

      {showNav && <BottomNav current={screen} navigate={navigate} />}
    </SafeAreaView>
  );
}
