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
  onLogout: () => void;
}

const ProfileScreen = ({ navigate, user, reservations, onLogout }: Props) => {
  const myRes = reservations.filter((r) => r.userId === user.id || r.userId === "u0");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 60 }}>
      <TouchableOpacity onPress={() => navigate("dashboard")} style={styles.backBtn}>
        <Text style={styles.backText}>← Dashboard</Text>
      </TouchableOpacity>

      {/* ── Avatar & Info ─────────────────────────────────────────────────────── */}
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>{user.name[0]}</Text>
        </View>
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <View style={styles.promoBadge}>
          <Text style={styles.promoBadgeText}>{user.promo}</Text>
        </View>
      </View>

      {/* ── My Reservations ───────────────────────────────────────────────────── */}
      <Text style={styles.sectionLabel}>My Reservations</Text>

      {myRes.length === 0 && (
        <Text style={[styles.screenSub, { textAlign: "center", marginTop: 8 }]}>
          No reservations yet.
        </Text>
      )}

      {myRes.map((r) => (
        <View key={r.id} style={styles.resCard}>
          <View style={styles.resLeft}>
            <Text style={styles.resDate}>{formatDate(r.date)}</Text>
            <Text style={styles.resTime}>{r.time}</Text>
          </View>
          <View style={styles.resRight}>
            <Text style={styles.resMeta}>
              {r.players.length} player{r.players.length !== 1 ? "s" : ""}
            </Text>
          </View>
        </View>
      ))}

      {/* ── Sign Out ──────────────────────────────────────────────────────────── */}
      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
