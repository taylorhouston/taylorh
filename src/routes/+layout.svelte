<script lang="ts">
  import "./styles.css"
  import MenuNav from "./MenuNav.svelte"
  import Drawer from "$lib/Drawer.svelte"
  import { getContext, setContext } from "svelte"
  import { type Writable, writable } from "svelte/store"
  import ListView from "./ListView.svelte"
  import { experimentData } from "./experimentData"
  import { browser } from "$app/environment"
  import { activateModal, type ActivateModal, type Theme } from "./contexts"
  setContext<{ theme: Writable<string> }>("theme", { theme: writable("") })
  setContext<ActivateModal>("activate-modal", {
    active: writable(false),
  })
  const { active } = getContext<ActivateModal>(activateModal)
  const { theme } = getContext<Theme>("theme")

  if (browser) {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    $theme =
      localStorage.getItem("theme") ?? prefersDarkMode.matches
        ? "dark-theme"
        : "light-theme"

    const updateThemeOnChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) {
        return
      }
      $theme = e.matches ? "dark-theme" : "light-theme"
      document.documentElement.classList.remove("dark-theme")
      document.documentElement.classList.add($theme)
    }
    prefersDarkMode.addEventListener("change", updateThemeOnChange)
  }
</script>

<svelte:head>
  <script lang="ts">
    let themeMode = ""
    if (localStorage.getItem("theme")) {
      themeMode = localStorage.getItem("theme")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      themeMode = "dark-theme"
      $theme = "dark-theme"
    } else {
      themeMode = "light-theme"
      $theme = "dark-theme"
    }
    if (document) {
      document.documentElement.classList.add(themeMode)
    }
  </script>
</svelte:head>
<div class="app">
  <Drawer>
    <ListView items={experimentData} onClose={() => ($active = false)} />
  </Drawer>

  <main inert={$active}>
    <header>
      <MenuNav />
    </header>
    <slot />
  </main>

  <footer>
    &copy; 2023-{new Date().getFullYear()} TaylorH Dev, All rights reserved
  </footer>
</div>

<style>
  .app {
    background-color: var(--body);
  }
  header {
    position: sticky;
    background-color: var(--body);
    z-index: 2;
    top: 0;
  }
  footer {
    margin: 0 -0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    height: 6rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
