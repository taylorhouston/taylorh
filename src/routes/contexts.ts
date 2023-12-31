import type { Writable } from "svelte/store"

export const theme = "theme"
export const activateModal = "activate-modal"
export interface Theme {
  theme: Writable<"light-theme" | "dark-theme">
}
export interface ActivateModal {
  active: Writable<boolean>
}
