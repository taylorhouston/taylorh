<script lang="ts">
  import { getContext } from "svelte"
  import Logo from "./Logo.svelte"
  import ThemeButton from "./ThemeButton.svelte"
  import { browser } from "$app/environment"
  import { activateModal, type ActivateModal } from "./contexts"
  const { active } = getContext<ActivateModal>(activateModal)
  function handleClick() {
    $active = !$active
  }
  let theme = ""
  if (browser) {
    if (localStorage.getItem("theme") != null) {
      theme = localStorage.getItem("theme") as string
    } else {
      theme = document.documentElement.classList.contains("light-theme")
        ? "light-theme"
        : "dark-theme"
    }
  }
</script>

<nav>
  <div class="nav-container">
    <a href="/" class="logo-container">
      <Logo />
    </a>
    <button on:click={handleClick}
      ><span class="menu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    <div class="theme-container">
      <ThemeButton />
    </div>
  </div>
</nav>

<style>
  nav {
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    border-bottom: var(--off-body) 1px solid;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  .theme-container {
    flex-grow: 1;
    display: flex;
    justify-content: end;
  }

  a {
    text-decoration: none;
    color: var(--primary);

    &:visited {
      color: var(--primary);
    }
  }

  .logo-container {
    width: 5rem;
    margin-left: 1rem;
    line-height: 0;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & > span {
      background-color: var(--text);
      width: 3rem;
      height: 0.5rem;
      border-radius: 0.5rem;
    }
  }

  .nav-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 1rem;
  }
</style>
