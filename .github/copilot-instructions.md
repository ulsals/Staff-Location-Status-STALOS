<!-- Copilot / AI agent instructions for the STALOS repo -->

# STALOS — AI Contributor Notes

Short, actionable guidance for AI coding agents working on this repository.

**Architecture:**

- **Platform:** Expo React Native app using `expo-router` for filesystem-based routing. Root layout is `app/_layout.tsx` and the tab layout is `app/(tabs)/_layout.tsx`.
- **Data layer:** Uses `@tanstack/react-query`. A single `QueryClient` is created in `app/_layout.tsx` and the primary data hook is `hooks/use-staff-data.ts`.
- **Styling / Theme:** Centralized theme in `constants/theme.ts` and a small theme hook `hooks/use-color-scheme.ts`. Components use `@/components/themed-text.tsx` and `@/components/themed-view.tsx` for consistent color handling.

**Key files to inspect for context:**

- `app/(tabs)/index.tsx` — main dashboard UI and example usage of `use-staff-data` and themed components.
- `hooks/use-staff-data.ts` — fetch logic and response shape (see `StaffLocation` type).
- `app/_layout.tsx` — QueryClient, global ThemeProvider, and router stack configuration.
- `constants/theme.ts` — color tokens for light/dark; use `useColorScheme()` to access.
- `package.json` — available scripts and dependency list (Expo, React Query, Expo Router).

**Data & integration details (important):**

- External API: `http://spidah.my.id/dimana.php` (used directly in `use-staff-data.ts`). The expected response shape is typed as:
  - `status: string`
  - `updatedAt: string` (format: `YYYYMMDDHHmm` in current code, transformed before display)
  - `location: string`
- `use-staff-data` sets `staleTime: 0` and `queryKey: ['staffLocation']`. Keep this in mind if you change cache or refetch behavior.

**Developer workflows & commands:**

- Start the dev server: `npm run start` (runs `expo start`). Use `npm run android`, `npm run ios` or `npm run web` to open on a specific platform.
- Reset helper: `npm run reset-project` runs `node ./scripts/reset-project.js`.
- Linting: `npm run lint` (uses `expo lint`). There are no unit tests in the repo by default.

**Project conventions & patterns:**

- Path alias: `@/` maps to the project root (see `tsconfig.json`), use it when importing internal modules.
- Themed primitives: Prefer `ThemedText` / `ThemedView` for consistent color management instead of raw `Text`/`View` when colors matter.
- Small, focused hooks: Data fetching lives in `hooks/` and uses `react-query` hooks (`useQuery`). Follow the existing pattern for new endpoints (export the hook, type the response interface, provide `queryKey`).
- Routing: `app/` uses Expo Router conventions — adding files in `app/` creates routes automatically. Tabs live in `app/(tabs)/`.

**Editing guidance for AI agents:**

- When changing data fetching, update the TypeScript `StaffLocation` type in `hooks/use-staff-data.ts` and adjust any UI formatting (see `app/(tabs)/index.tsx` for `updatedAt` parsing).
- If adding new screens, follow the file-based routing (create `app/<route>.tsx` or `app/(tabs)/<route>.tsx` for tab screens). Update `app/(tabs)/_layout.tsx` only for global tab options.
- Preserve the existing theme tokens in `constants/theme.ts`. If new colors are added, include both `light` and `dark` entries.

**Common pitfalls to avoid:**

- Do not change the `QueryClient` initialization to multiple instances — it must remain a single client at root (`app/_layout.tsx`).
- The external API is remote and may be flaky; respect `fetch` error handling in `use-staff-data.ts` and avoid silently swallowing network errors.
- Time formatting: current code expects `updatedAt` in `YYYYMMDDHHmm` and converts it before `toLocaleString`. If API changes, update formatting code in `app/(tabs)/index.tsx`.

If anything here is unclear or you'd like more detail about a specific area (routing, queries, theming, or CI/workflow), tell me which section to expand.
