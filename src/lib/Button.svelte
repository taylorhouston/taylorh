<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  export let href: string | undefined = undefined
  export let label: string | undefined = undefined
  export let disabled: boolean = false
  export let onClick: () => void = () => {}
</script>

{#if href}
  <a {href}>
    <button>
      <slot />
    </button>
  </a>
{/if}
{#if !href}
  <button aria-label={label} {disabled} {type} on:click={onClick}>
    <slot />
  </button>
{/if}

<style>
  a {
    text-decoration: none;
  }
  button {
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    padding: 1rem 2rem;
    height: 3rem;
    border: 0;
    font-size: inherit;
    outline-offset: 0.3rem;
    outline-color: var(--color-accent);
    color: var(--color-body);
    background-color: var(--color-accent);
    border-radius: 5px;
  }

  a button {
    cursor: pointer;
  }

  button[disabled='true'] {
    background-color: var(--color-text);
    pointer-events: none;
  }
</style>
