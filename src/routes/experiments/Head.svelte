<script lang="ts">
  import BackSplash from "$lib/BackSplash.svelte"
  import GitHubIcon from '../GitHubIcon.svelte';
  import Button from '$lib/Button.svelte';

  export let headline: string
  export let reason: string | undefined = undefined
  export let pathname: string
</script>

<BackSplash {headline}>
  <h2>Why does this exist?</h2>
  <p>{reason}</p>
  <slot />
  <Button href={`https://github.com/taylorhouston/taylorh/tree/main/src/routes${pathname}`}><GitHubIcon />view code</Button>
</BackSplash>

<style>
  h2 {
    font-size: 2.4rem;
    margin: 0;
  }
</style>
