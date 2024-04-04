<script lang="ts">
  import { getContext } from 'svelte'
  import type { Theme } from './contexts'
  const { theme } = getContext<Theme>('theme')
  function handleThemeClick() {
    const root = document.documentElement.classList
    if (root) {
      if (root.contains('light-theme')) {
        root.add('dark-theme')
        root.remove('light-theme')
        $theme = 'dark-theme'
        localStorage.setItem('theme', 'dark-theme')
      } else {
        root.add('light-theme')
        root.remove('dark-theme')
        $theme = 'light-theme'
        localStorage.setItem('theme', 'light-theme')
      }
    }
  }
</script>

<button on:click={handleThemeClick}>
  {#if $theme === 'dark-theme'}
    <svg viewBox="0 0 38.58 38.58">
      <circle class="cls-2" cx="19.14" cy="19.29" r="13.2" />
      <polyline class="cls-1" points="15.08 4.06 19.14 0 23.2 4.06" />
      <polyline class="cls-1" points="23.5 34.52 19.44 38.58 15.38 34.52" />
      <polyline class="cls-1" points="34.52 15.08 38.58 19.14 34.52 23.2" />
      <polyline class="cls-1" points="4.06 23.5 0 19.44 4.06 15.38" />
      <polyline class="cls-1" points="27.09 5.55 32.83 5.55 32.83 11.29" />
      <polyline class="cls-1" points="11.5 33.04 5.75 33.04 5.75 27.3" />
      <polyline class="cls-1" points="33.04 27.09 33.04 32.83 27.3 32.83" />
      <polyline class="cls-1" points="5.55 11.5 5.55 5.75 11.29 5.75" />
    </svg>
  {:else if $theme === 'light-theme'}
    <svg viewBox="0 0 30.88 35.15">
      <path
        class="moon"
        d="m9.1,24.21C4.43,16.74,7.42,6.32,15.7,0c-1.68.59-3.35,1.37-4.95,2.37C1.02,8.46-2.81,19.9,2.21,27.93s16.98,9.6,26.72,3.51c.68-.42,1.32-.88,1.94-1.36-8.54,3.01-17.58.83-21.77-5.88Z"
      />
    </svg>
  {/if}
</button>

<style>
  svg {
    height: var(--25px);
  }
  button {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--color-text);
    height: var(--40px);
    width: var(--50px);
    margin-right: 10px;
    border-radius: 0.5rem;
  }
  .cls-1 {
    fill-rule: evenodd;
  }
  .moon {
    fill: var(--color-text);
    stroke-width: 0;
  }
  .cls-1,
  .cls-2 {
    fill: var(--color-text);
    stroke-width: 0;
  }
</style>
