# ⚽ ISIFOOT

> Football pitch reservation app for ISIMA Mahdia students.

Built with **React Native** + **TypeScript**.

---

## Features

- 🔐 Login & Register (student accounts)
- 🏟️ Reserve the pitch by date & time slot
- 📅 Planning view — check real-time availability
- ⚔️ Fixtures — join incomplete teams
- 👤 Profile — view your bookings & sign out

---

## Project Structure

```
ISIFOOT/
├── App.tsx                    # Root orchestrator (state + routing)
└── src/
    ├── types/                 # TypeScript interfaces & types
    ├── constants/             # Colors, mock data, nav items
    ├── utils/                 # Helpers (formatDate, etc.)
    ├── styles/                # Global StyleSheet
    ├── components/            # Reusable UI components
    │   ├── GreenButton.tsx
    │   ├── OutlineButton.tsx
    │   ├── Field.tsx
    │   └── BottomNav.tsx
    └── screens/               # One file per screen
        ├── HomeScreen.tsx
        ├── LoginScreen.tsx
        ├── RegisterScreen.tsx
        ├── DashboardScreen.tsx
        ├── PlanningScreen.tsx
        ├── ReserveScreen.tsx
        ├── FixturesScreen.tsx
        └── ProfileScreen.tsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# Run on Android
npx react-native run-android


## Tech Stack

| Tool | Purpose |
|------|---------|
| React Native | Mobile framework |
| TypeScript | Type safety |
| React Hooks | Local state management |

---

## Author

Made with ❤️ at ISIMA Mahdia By Dhia Eddine Bejaoui && Rayen Ben Maaoui
