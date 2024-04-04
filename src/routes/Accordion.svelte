<script lang="ts">
  import X from "./X.svelte"

  export let title: string
  export let title2: string
  export let dateString: string
  let isOpen: boolean = false

  function openHandler() {
    isOpen = !isOpen
  }
</script>

<div class="container">
  <button class="accordion-summary" on:click={openHandler}>
    <div class="left-side">
      <X {isOpen} />
      <div class="titles">
        <div>{title}</div>
        <div>{title2}</div>
      </div>
    </div>
    <div>{dateString}</div>
  </button>
  <div class="accordion-content" class:isOpen>
    <div class="inner-accordion-content">
      <slot />
    </div>
  </div>
</div>

<style>
  .container {
    margin: 1rem 0;
  }

  .titles {
    text-align: left;
  }

  .accordion-summary {
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: 0;
    color: var(--color-text);
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 500ms;
  }

  .accordion-content.isOpen {
    grid-template-rows: 1fr;
  }

  .left-side {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 1rem;
    flex-grow: 1;
  }

  .inner-accordion-content {
    overflow: hidden;
  }
</style>
