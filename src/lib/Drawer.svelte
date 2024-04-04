<script lang="ts">
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'
  import { activateModal, type ActivateModal } from '../routes/contexts'

  const { active } = getContext<ActivateModal>(activateModal)

  const onEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      $active = false
    }
  }

  const onClickHandler = () => {
    $active = false
  }
  function customSlide(node: Element, { duration = 250 }) {
    return {
      duration,
      css: (t: number) => {
        console.log('t', -360 + t * 360)
        return `
           transform: translateX(${-360 + t * 360}px);
        `
      }
    }
  }
  function init(node: HTMLElement) {
    node.focus()
  }
</script>

<svelte:window on:keydown={onEsc} />
{#if $active}
  <div inert={!$active} role="dialog" transition:customSlide={{ duration: 250 }} class="drawer">
    <button use:init on:click={onClickHandler}>&times;</button>
    <div class="dialog-inner">
      <slot />
    </div>
  </div>
  <div transition:fade={{ duration: 250 }} class="overlay" />
{/if}

<style>
  .drawer {
    position: absolute;
    left: 0;
    background-color: var(--color-body);
    height: 100vh;
    width: 360px;
    z-index: 4;
  }

  .overlay {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--color-text);
    z-index: 3;
    opacity: 0.6;
  }

  button {
    background: transparent;
    border: 0;
    font-size: var(--40px);
    position: absolute;
    right: 0;
    padding: 0 1rem;
    color: var(--color-text);
  }
  :global(body:has(.overlay)) {
    height: 100%;
    overflow: hidden;
  }
</style>
