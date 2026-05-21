// Centralized, circular-dependency-safe refresh state
const state = { active: false };

export function setRefreshActive(active: boolean) {
  state.active = active;
}

export function isRefreshActive() {
  return state.active;
}
