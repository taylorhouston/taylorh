<script lang="ts">
  import type { ListData } from './experimentData'
  export let onClose: () => void
  export let items: ListData[] = []
</script>

<ul>
  {#each items as item}
    <li>
      {#if item.hasOwnProperty('href')}
        <a on:click={onClose} href={item.href}>{item.label}</a>
      {:else}
        <h3>{item.label}</h3>
      {/if}
    </li>
    {#if item.list}
      <svelte:self items={item.list} {onClose} />
    {/if}
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-inline-start: 2rem;
    margin: 0;
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    height: var(--40px);
  }
  a {
    vertical-align: center;
    text-decoration: none;
    color: var(--font-body);
    flex-grow: 1;
  }
</style>
