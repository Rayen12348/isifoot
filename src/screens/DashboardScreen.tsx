import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Screen, User, Reservation } from "../types";
import { styles } from "../styles";
import { C } from "../constants/colors";
import { formatDate } from "../utils/formatDate";

interface Props {
  navigate: (s: Screen) => void;
  user: User;
  reservations: Reservation[];
}

const DashboardScreen = ({ navigate, user, reservations }: Props) => {
  const myRes   = reservations.filter((r) => r.userId === user.id || r.userId === "u0");
  const upcoming = reservations.filter((r) => r.date >= "2026-03-24").slice(0, 3);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 40 }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <View style={styles.dashHeader}>
        <View>
          <Text style={styles.dashGreet}>Hello, {user.name.split(" ")[0]} 👋</Text>
          <Text style={styles.dashSub}>{user.promo} · ISIMA Mahdia</Text>
        </View>
        <TouchableOpacity onPress={() => navigate("profile")} style={styles.avatarBtn}>
          <Text style={styles.avatarText}>{user.name[0]}</Text>
        </TouchableOpacity>
      </View>

      {/* ── Quick Actions ───────────────────────────────────────────────────── */}
      <Text style={styles.sectionLabel}>Quick Actions</Text>
      <View style={styles.quickRow}>
        {[
          { icon: "🏟️", label: "Reserve",  screen: "reserve"  as Screen },
          { icon: "📅", label: "Planning", screen: "planning" as Screen },
          { icon: "⚔️", label: "Fixtures", screen: "fixtures" as Screen },
          { icon: "👤", label: "Profile",  screen: "profile"  as Screen },
        ].map((item) => (
          <TouchableOpacity key={item.screen} style={styles.quickCard} onPress={() => navigate(item.screen)} activeOpacity={0.8}>
            <Text style={styles.quickIcon}>{item.icon}</Text>
            <Text style={styles.quickLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>{myRes.length}</Text>
          <Text style={styles.statLabel}>My Bookings</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>{upcoming.length}</Text>
          <Text style={styles.statLabel}>Upcoming</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNum, { color: C.accent }]}>✓</Text>
          <Text style={styles.statLabel}>Active</Text>
        </View>
      </View>

      {/* ── Upcoming Reservations ───────────────────────────────────────────── */}
      <Text style={styles.sectionLabel}>Upcoming Reservations</Text>
      {upcoming.map((r) => (
        <View key={r.id} style={styles.resCard}>
          <View style={styles.resLeft}>
            <Text style={styles.resDate}>{formatDate(r.date)}</Text>
            <Text style={styles.resTime}>{r.time}</Text>
          </View>
          <View style={styles.resRight}>
            <Text style={styles.resName}>{r.userName}</Text>
            <Text style={styles.resMeta}>{r.players.length} player{r.players.length !== 1 ? "s" : ""}</Text>
          </View>
          <View style={[styles.resBadge, { backgroundColor: C.accentGlow }]}>
            <Text style={{ color: C.accent, fontSize: 11, fontWeight: "700" }}>BOOKED</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DashboardScreen;
