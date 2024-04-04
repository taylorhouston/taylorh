<script lang="ts">
  import Button from '$lib/Button.svelte'
  import X from '../../X.svelte'

  let modal: HTMLDialogElement
  function handleModalState() {
    modal.showModal()
  }
</script>

<dialog bind:this={modal}>
  <div class="dialog-container">
    <div class="x-container">
      <X onClick={() => modal.close()} />
    </div>

    <form></form>
    Howdy I'm a modal
  </div>
</dialog>
<Button type="button" onClick={handleModalState}>open</Button>

<style>
  dialog {
    color: var(--color-text);
    box-shadow: 2px 2px 5px var(--overlay);
    width: 50%;
    background: var(--color-body);
    border: 0;
    border-radius: 0.5rem;
  }

  dialog::backdrop {
    backdrop-filter: blur(6px);
    background-color: var(--overlay);
  }

  .dialog-container {
    display: flex;
    position: relative;
  }

  .x-container {
    position: absolute;
    right: -10px;
    top: -10px;
  }
</style>
