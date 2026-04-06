import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Screen, Reservation } from "../types";
import { styles } from "../styles";
import { C } from "../constants/colors";
import { NEXT_DAYS, TIME_SLOTS } from "../constants/data";
import { formatDate } from "../utils/formatDate";

interface Props {
  navigate: (s: Screen) => void;
  reservations: Reservation[];
}

const PlanningScreen = ({ navigate, reservations }: Props) => {
  const [selectedDate, setSelectedDate] = useState(NEXT_DAYS[0]);

  const dayRes     = reservations.filter((r) => r.date === selectedDate);
  const bookedTimes = dayRes.map((r) => r.time);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => navigate("dashboard")} style={styles.backBtn}>
        <Text style={styles.backText}>← Dashboard</Text>
      </TouchableOpacity>

      <Text style={styles.screenTitle}>Field Planning</Text>
      <Text style={styles.screenSub}>Check pitch availability by day</Text>

      {/* Date picker */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
        {NEXT_DAYS.map((d) => (
          <TouchableOpacity
            key={d}
            style={[styles.dateChip, selectedDate === d && styles.dateChipActive]}
            onPress={() => setSelectedDate(d)}
          >
            <Text style={[styles.dateChipText, selectedDate === d && styles.dateChipTextActive]}>
              {formatDate(d)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Time grid */}
      <View style={styles.timeGrid}>
        {TIME_SLOTS.map((t) => {
          const isBooked = bookedTimes.includes(t);
          const res = dayRes.find((r) => r.time === t);
          return (
            <View key={t} style={[styles.timeSlot, isBooked ? styles.timeSlotBooked : styles.timeSlotFree]}>
              <Text style={[styles.timeSlotHour, { color: isBooked ? C.danger : C.accent }]}>{t}</Text>
              {isBooked
                ? <Text style={styles.timeSlotStatus}>🔴 {res?.userName}</Text>
                : <Text style={styles.timeSlotStatus}>🟢 Available</Text>
              }
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PlanningScreen;
