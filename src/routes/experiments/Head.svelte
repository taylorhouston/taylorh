<script lang="ts">
  import BackSplash from "../BackSplash.svelte"

  export let headline: string
  export let reason: string | undefined = undefined
</script>

<BackSplash {headline}>
  <h2>Why does this exist?</h2>
  <p>{reason}</p>
  <slot />
</BackSplash>

<style>
  h2 {
    font-size: 2.4rem;
    margin: 0;
  }
</style>
