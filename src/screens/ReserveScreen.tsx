import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { Screen, User, Reservation } from "../types";
import { GreenButton, OutlineButton, Field } from "../components";
import { styles } from "../styles";
import { C } from "../constants/colors";
import { NEXT_DAYS, TIME_SLOTS } from "../constants/data";
import { formatDate } from "../utils/formatDate";

interface Props {
  navigate: (s: Screen) => void;
  user: User;
  reservations: Reservation[];
  onAddReservation: (r: Reservation) => void;
}

const ReserveScreen = ({ navigate, user, reservations, onAddReservation }: Props) => {
  const [selectedDate, setSelectedDate] = useState(NEXT_DAYS[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [players, setPlayers]           = useState("");
  const [showConfirm, setShowConfirm]   = useState(false);

  const bookedTimes = reservations
    .filter((r) => r.date === selectedDate)
    .map((r) => r.time);

  const handleConfirm = () => {
    if (!selectedTime) { Alert.alert("Error", "Please pick a time slot."); return; }
    const playerList = players.split(",").map((p) => p.trim()).filter(Boolean);
    const newRes: Reservation = {
      id: `r_${Date.now()}`,
      date: selectedDate,
      time: selectedTime,
      userId: user.id,
      userName: user.name,
      players: [user.name, ...playerList],
    };
    onAddReservation(newRes);
    setShowConfirm(false);
    Alert.alert("✅ Confirmed!", `Pitch booked on ${formatDate(selectedDate)} at ${selectedTime}.`);
    navigate("dashboard");
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 60 }}>
      <TouchableOpacity onPress={() => navigate("dashboard")} style={styles.backBtn}>
        <Text style={styles.backText}>← Dashboard</Text>
      </TouchableOpacity>

      <Text style={styles.screenTitle}>Reserve the Pitch</Text>
      <Text style={styles.screenSub}>Select date and time</Text>

      {/* Date picker */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
        {NEXT_DAYS.map((d) => (
          <TouchableOpacity
            key={d}
            style={[styles.dateChip, selectedDate === d && styles.dateChipActive]}
            onPress={() => { setSelectedDate(d); setSelectedTime(null); }}
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
          const isBooked   = bookedTimes.includes(t);
          const isSelected = selectedTime === t;

          if (isBooked) {
            return (
              <View key={t} style={[styles.timeSlot, styles.timeSlotBooked]}>
                <Text style={[styles.timeSlotHour, { color: C.danger }]}>{t}</Text>
                <Text style={[styles.timeSlotStatus, { color: C.muted }]}>Unavailable</Text>
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={t}
              style={[styles.timeSlot, styles.timeSlotFree, isSelected && styles.timeSlotSelected]}
              onPress={() => setSelectedTime(t)}
              activeOpacity={0.8}
            >
              <Text style={[styles.timeSlotHour, { color: isSelected ? C.bg : C.accent }]}>{t}</Text>
              <Text style={[styles.timeSlotStatus, { color: isSelected ? C.bg : C.text }]}>
                {isSelected ? "✓ Selected" : "Tap to select"}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.sectionLabel}>Add Other Players (optional)</Text>
      <Field placeholder="Player names, comma separated" value={players} onChangeText={setPlayers} />

      <GreenButton
        label={selectedTime ? `Book at ${selectedTime}` : "Select a time first"}
        onPress={() => { if (selectedTime) setShowConfirm(true); }}
        style={{ opacity: selectedTime ? 1 : 0.4, marginTop: 16 }}
      />

      {/* Confirm Modal */}
      <Modal visible={showConfirm} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Confirm Booking</Text>
            <Text style={styles.modalBody}>
              {"📅 "}{formatDate(selectedDate)} · {selectedTime}{"\n"}
              {"👤 "}{user.name}{"\n"}
              {"🏟️ ISIMA Football Pitch"}
            </Text>
            <GreenButton  label="Confirm" onPress={handleConfirm}              style={{ marginTop: 16 }} />
            <OutlineButton label="Cancel"  onPress={() => setShowConfirm(false)} style={{ marginTop: 8  }} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ReserveScreen;
