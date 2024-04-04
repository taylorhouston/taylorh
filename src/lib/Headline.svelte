<script lang="ts">
  export let level: number = 1
</script>

{#if level === 1}
  <h1><slot /></h1>
{:else if level === 2}
  <h2><slot /></h2>
{:else if level === 3}
  <h3><slot /></h3>
{:else if level === 4}
  <h4><slot /></h4>
{/if}

<style>
  h1,
  h2,
  h3,
  h4 {
    font-size: var(--24px);
  }
</style>
