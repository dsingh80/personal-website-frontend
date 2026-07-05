import { computed, ref } from "vue";

export type ThemeName = "light" | "dark";

const STORAGE_KEY = "site-theme";

/** Module-level state: one shared theme for the whole app (singleton). */
const theme = ref<ThemeName>(readInitialTheme());

function readInitialTheme(): ThemeName {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  return "light";
}

function applyTheme(next: ThemeName) {
  theme.value = next;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", next);
  }
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode, disabled cookies) — theme
    // still works for the session, it just won't persist across reloads.
  }
}

/**
 * Shared light/dark theme state, kept in sync with the `data-theme`
 * attribute on `<html>`. The attribute is set synchronously in `index.html`
 * before Vue mounts to avoid a flash of the wrong theme; this composable
 * takes over from there.
 */
export function useTheme() {
  function toggleTheme() {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  }

  function setTheme(next: ThemeName) {
    applyTheme(next);
  }

  const isDark = computed(() => theme.value === "dark");

  return { theme, isDark, toggleTheme, setTheme };
}
