# ISIFOOT — Git Setup & Commit Guide
# Run these commands in order from inside your project folder.

# ─────────────────────────────────────────────────────────────
# STEP 1 — Initialize the repo locally
# ─────────────────────────────────────────────────────────────
git init
git branch -M main

# ─────────────────────────────────────────────────────────────
# STEP 2 — Connect to GitHub
# (Create an empty repo on github.com first, then run:)
# ─────────────────────────────────────────────────────────────
git remote add origin https://github.com/YOUR_USERNAME/isifoot.git

# ─────────────────────────────────────────────────────────────
# STEP 3 — Commit 1: Project bootstrap
# ─────────────────────────────────────────────────────────────
git add .gitignore
git commit -m "chore: add .gitignore"

git add README.md
git commit -m "docs: add README"

# ─────────────────────────────────────────────────────────────
# STEP 4 — Commit 2: Types
# ─────────────────────────────────────────────────────────────
git add src/types/index.ts
git commit -m "feat(types): add Screen, User, Reservation, Fixture interfaces"

# ─────────────────────────────────────────────────────────────
# STEP 5 — Commit 3: Constants
# ─────────────────────────────────────────────────────────────
git add src/constants/colors.ts
git commit -m "feat(constants): add color palette"

git add src/constants/data.ts
git commit -m "feat(constants): add mock data, TIME_SLOTS, NEXT_DAYS, NAV_ITEMS"

# ─────────────────────────────────────────────────────────────
# STEP 6 — Commit 4: Utils
# ─────────────────────────────────────────────────────────────
git add src/utils/formatDate.ts
git commit -m "feat(utils): add formatDate helper"

# ─────────────────────────────────────────────────────────────
# STEP 7 — Commit 5: Global styles
# ─────────────────────────────────────────────────────────────
git add src/styles/index.ts
git commit -m "feat(styles): add global StyleSheet"

# ─────────────────────────────────────────────────────────────
# STEP 8 — Commit 6: Reusable components
# ─────────────────────────────────────────────────────────────
git add src/components/GreenButton.tsx
git commit -m "feat(components): add GreenButton"

git add src/components/OutlineButton.tsx
git commit -m "feat(components): add OutlineButton"

git add src/components/Field.tsx
git commit -m "feat(components): add Field (TextInput wrapper)"

git add src/components/BottomNav.tsx
git commit -m "feat(components): add BottomNav"

git add src/components/index.ts
git commit -m "chore(components): add barrel export"

# ─────────────────────────────────────────────────────────────
# STEP 9 — Commit 7: Screens
# ─────────────────────────────────────────────────────────────
git add src/screens/HomeScreen.tsx
git commit -m "feat(screens): add HomeScreen (splash)"

git add src/screens/LoginScreen.tsx
git commit -m "feat(screens): add LoginScreen"

git add src/screens/RegisterScreen.tsx
git commit -m "feat(screens): add RegisterScreen"

git add src/screens/DashboardScreen.tsx
git commit -m "feat(screens): add DashboardScreen"

git add src/screens/PlanningScreen.tsx
git commit -m "feat(screens): add PlanningScreen"

git add src/screens/ReserveScreen.tsx
git commit -m "feat(screens): add ReserveScreen"

git add src/screens/FixturesScreen.tsx
git commit -m "feat(screens): add FixturesScreen"

git add src/screens/ProfileScreen.tsx
git commit -m "feat(screens): add ProfileScreen"

git add src/screens/index.ts
git commit -m "chore(screens): add barrel export"

# ─────────────────────────────────────────────────────────────
# STEP 10 — Commit 8: Root App
# ─────────────────────────────────────────────────────────────
git add App.tsx
git commit -m "feat: add root App.tsx — state orchestrator and screen router"

# ─────────────────────────────────────────────────────────────
# STEP 11 — Push everything to GitHub
# ─────────────────────────────────────────────────────────────
git push -u origin main
