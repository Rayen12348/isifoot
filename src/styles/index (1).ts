import { StyleSheet } from "react-native";
import { C } from "../constants/colors";

export const styles = StyleSheet.create({
  root:    { flex: 1, backgroundColor: C.bg },
  screen:  { flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 16 },
  center:  { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: C.bg, paddingHorizontal: 24 },

  // ── Logo / Home ──────────────────────────────────────────────────────────────
  logoWrap:  { width: 100, height: 100, borderRadius: 50, backgroundColor: C.accentGlow, borderWidth: 2, borderColor: C.accent, justifyContent: "center", alignItems: "center", marginBottom: 20 },
  logoIcon:  { fontSize: 48 },
  brand:     { fontSize: 42, fontWeight: "900", color: C.white, letterSpacing: 6 },
  brandSub:  { fontSize: 13, color: C.muted, letterSpacing: 4, marginTop: 2, marginBottom: 8 },
  tagline:   { fontSize: 16, color: C.accent, letterSpacing: 2, fontStyle: "italic" },

  // ── Buttons ──────────────────────────────────────────────────────────────────
  greenBtn:      { backgroundColor: C.accent, paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  greenBtnText:  { color: C.bg, fontWeight: "800", fontSize: 15, letterSpacing: 1 },
  outlineBtn:    { borderWidth: 1.5, borderColor: C.accent, paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  outlineBtnText:{ color: C.accent, fontWeight: "700", fontSize: 15 },

  // ── Form ─────────────────────────────────────────────────────────────────────
  formScreen: { backgroundColor: C.bg, padding: 24, paddingTop: 40, flexGrow: 1 },
  input:      { backgroundColor: C.surface, borderWidth: 1, borderColor: C.border, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 13, color: C.text, fontSize: 15, marginBottom: 12 },
  linkText:   { color: C.muted, fontSize: 14 },

  // ── Navigation ───────────────────────────────────────────────────────────────
  backBtn:  { marginBottom: 16, marginTop: 4 },
  backText: { color: C.accent, fontSize: 14, fontWeight: "600" },

  // ── Screen headers ───────────────────────────────────────────────────────────
  screenTitle: { fontSize: 28, fontWeight: "900", color: C.white, marginBottom: 4 },
  screenSub:   { fontSize: 14, color: C.muted, marginBottom: 20 },

  // ── Dashboard ────────────────────────────────────────────────────────────────
  dashHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingTop: 8 },
  dashGreet:  { fontSize: 22, fontWeight: "800", color: C.white },
  dashSub:    { fontSize: 12, color: C.muted, marginTop: 2 },
  avatarBtn:  { width: 44, height: 44, borderRadius: 22, backgroundColor: C.accentDim, justifyContent: "center", alignItems: "center" },
  avatarText: { color: C.accent, fontWeight: "800", fontSize: 18 },

  // ── Quick Actions ────────────────────────────────────────────────────────────
  quickRow:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
  quickCard:  { flex: 1, backgroundColor: C.card, borderRadius: 14, padding: 14, alignItems: "center", marginHorizontal: 4, borderWidth: 1, borderColor: C.border },
  quickIcon:  { fontSize: 24, marginBottom: 6 },
  quickLabel: { fontSize: 11, color: C.text, fontWeight: "600" },

  // ── Stats ────────────────────────────────────────────────────────────────────
  statsRow:  { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
  statCard:  { flex: 1, backgroundColor: C.card, borderRadius: 12, padding: 14, alignItems: "center", marginHorizontal: 4, borderWidth: 1, borderColor: C.border },
  statNum:   { fontSize: 26, fontWeight: "900", color: C.white },
  statLabel: { fontSize: 11, color: C.muted, marginTop: 2 },

  sectionLabel: { fontSize: 13, fontWeight: "700", color: C.muted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 },

  // ── Reservation card ─────────────────────────────────────────────────────────
  resCard:  { flexDirection: "row", alignItems: "center", backgroundColor: C.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.border },
  resLeft:  { marginRight: 14, alignItems: "center", minWidth: 50 },
  resDate:  { fontSize: 13, fontWeight: "700", color: C.white },
  resTime:  { fontSize: 18, fontWeight: "900", color: C.accent },
  resRight: { flex: 1 },
  resName:  { fontSize: 14, fontWeight: "700", color: C.white },
  resMeta:  { fontSize: 12, color: C.muted, marginTop: 2 },
  resBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },

  // ── Date scroll ──────────────────────────────────────────────────────────────
  dateScroll:          { marginBottom: 16 },
  dateChip:            { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: C.surface, marginRight: 8, borderWidth: 1, borderColor: C.border },
  dateChipActive:      { backgroundColor: C.accent, borderColor: C.accent },
  dateChipText:        { color: C.muted, fontWeight: "600", fontSize: 13 },
  dateChipTextActive:  { color: C.bg },

  // ── Time grid ────────────────────────────────────────────────────────────────
  timeGrid:         { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 16 },
  timeSlot:         { width: "48%", borderRadius: 10, padding: 12, marginBottom: 10, borderWidth: 1 },
  timeSlotFree:     { backgroundColor: C.card, borderColor: C.border },
  timeSlotBooked:   { backgroundColor: "#1A0A0A", borderColor: "#3A1010" },
  timeSlotSelected: { backgroundColor: C.accent, borderColor: C.accent },
  timeSlotHour:     { fontSize: 16, fontWeight: "800" },
  timeSlotStatus:   { fontSize: 11, color: C.muted, marginTop: 2 },

  // ── Modal ────────────────────────────────────────────────────────────────────
  modalOverlay: { flex: 1, backgroundColor: "#000000AA", justifyContent: "center", alignItems: "center" },
  modalCard:    { backgroundColor: C.surface, borderRadius: 20, padding: 24, width: "80%", borderWidth: 1, borderColor: C.border },
  modalTitle:   { fontSize: 20, fontWeight: "900", color: C.white, marginBottom: 12 },
  modalBody:    { fontSize: 14, color: C.text, lineHeight: 24 },

  // ── Fixtures ─────────────────────────────────────────────────────────────────
  fixtureCard:  { backgroundColor: C.card, borderRadius: 16, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: C.border },
  fixtureMeta:  { marginBottom: 12 },
  fixtureDate:  { fontSize: 13, color: C.muted, fontWeight: "600" },
  fixtureTeams: { flexDirection: "row", alignItems: "flex-start" },
  fixtureTeam:  { flex: 1 },
  teamLabel:    { fontSize: 13, fontWeight: "800", color: C.accent, marginBottom: 6 },
  playerName:   { fontSize: 12, color: C.text, marginBottom: 3 },
  vsText:       { fontSize: 16, fontWeight: "900", color: C.muted, marginHorizontal: 12, marginTop: 4 },
  joinBtn:      { marginTop: 8, backgroundColor: C.accentGlow, borderRadius: 8, paddingVertical: 6, paddingHorizontal: 10, borderWidth: 1, borderColor: C.accentDim },
  joinBtnText:  { fontSize: 12, color: C.accent, fontWeight: "700" },

  // ── Profile ──────────────────────────────────────────────────────────────────
  profileHeader:     { alignItems: "center", paddingVertical: 24 },
  profileAvatar:     { width: 80, height: 80, borderRadius: 40, backgroundColor: C.accentDim, justifyContent: "center", alignItems: "center", marginBottom: 12 },
  profileAvatarText: { fontSize: 36, color: C.accent, fontWeight: "900" },
  profileName:       { fontSize: 22, fontWeight: "900", color: C.white },
  profileEmail:      { fontSize: 13, color: C.muted, marginTop: 4 },
  promoBadge:        { marginTop: 10, backgroundColor: C.accentGlow, paddingHorizontal: 14, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: C.accentDim },
  promoBadgeText:    { fontSize: 13, color: C.accent, fontWeight: "700" },
  logoutBtn:         { marginTop: 32, borderWidth: 1, borderColor: C.danger, borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  logoutText:        { color: C.danger, fontWeight: "700", fontSize: 15 },

  // ── Bottom nav ───────────────────────────────────────────────────────────────
  bottomNav: { flexDirection: "row", backgroundColor: C.surface, borderTopWidth: 1, borderTopColor: C.border, paddingBottom: 8, paddingTop: 8 },
  navItem:   { flex: 1, alignItems: "center", paddingVertical: 4, position: "relative" },
  navIcon:   { fontSize: 20 },
  navLabel:  { fontSize: 10, color: C.muted, marginTop: 3, fontWeight: "600" },
  navDot:    { width: 4, height: 4, borderRadius: 2, backgroundColor: C.accent, marginTop: 3 },
});
