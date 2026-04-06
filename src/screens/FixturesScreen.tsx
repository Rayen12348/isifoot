import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { Screen, User, Fixture } from "../types";
import { styles } from "../styles";
import { C } from "../constants/colors";
import { formatDate } from "../utils/formatDate";

interface Props {
  navigate: (s: Screen) => void;
  user: User;
  fixtures: Fixture[];
  onJoin: (fixtureId: string, team: "A" | "B") => void;
}

const FixturesScreen = ({ navigate, fixtures, onJoin }: Props) => (
  <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 40 }}>
    <TouchableOpacity onPress={() => navigate("dashboard")} style={styles.backBtn}>
      <Text style={styles.backText}>← Dashboard</Text>
    </TouchableOpacity>

    <Text style={styles.screenTitle}>Fixtures</Text>
    <Text style={styles.screenSub}>Join incomplete teams</Text>

    {fixtures.map((f) => {
      const needA = f.maxPlayers - f.teamA.length;
      const needB = f.maxPlayers - f.teamB.length;

      return (
        <View key={f.id} style={styles.fixtureCard}>
          <View style={styles.fixtureMeta}>
            <Text style={styles.fixtureDate}>📅 {formatDate(f.date)} · {f.time}</Text>
          </View>

          <View style={styles.fixtureTeams}>
            {/* Team A */}
            <View style={styles.fixtureTeam}>
              <Text style={styles.teamLabel}>Team A</Text>
              {f.teamA.map((p, i) => <Text key={i} style={styles.playerName}>• {p}</Text>)}
              {needA > 0
                ? <TouchableOpacity style={styles.joinBtn} onPress={() => onJoin(f.id, "A")}>
                    <Text style={styles.joinBtnText}>+{needA} spots · Join</Text>
                  </TouchableOpacity>
                : <Text style={[styles.playerName, { color: C.accent }]}>Full ✓</Text>
              }
            </View>

            <Text style={styles.vsText}>VS</Text>

            {/* Team B */}
            <View style={styles.fixtureTeam}>
              <Text style={styles.teamLabel}>Team B</Text>
              {f.teamB.map((p, i) => <Text key={i} style={styles.playerName}>• {p}</Text>)}
              {needB > 0
                ? <TouchableOpacity style={styles.joinBtn} onPress={() => onJoin(f.id, "B")}>
                    <Text style={styles.joinBtnText}>+{needB} spots · Join</Text>
                  </TouchableOpacity>
                : <Text style={[styles.playerName, { color: C.accent }]}>Full ✓</Text>
              }
            </View>
          </View>
        </View>
      );
    })}
  </ScrollView>
);

export default FixturesScreen;
