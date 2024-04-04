<script lang="ts">
  function onToggle() {
    toggled = !toggled
  }
  let toggled = false
</script>

<button class:toggled type="button" on:click={onToggle} aria-pressed={toggled}>
  <span class="label">Toggle me</span>
  <span class="switch">
    <span class="slider" />
  </span>
</button>

<style>
  button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label {
    padding-right: 0.5rem;
    color: var(--color-text);
  }

  .slider {
    display: block;
    border-radius: 100%;
    height: var(--30px);
    width: var(--30px);
    background-color: var(--color-body);
    transition: transform 0.5s;
    box-shadow: 0.1rem 0.1rem 0.2rem var(--color-text);
  }

  .switch {
    display: block;
    border: 1px solid var(--color-text);
    background-color: var(--off-body);
    width: 70px;
    padding: 4px;
    height: 40px;
    border-radius: 2rem;
    transition: background-color 0.5s;
  }

  .toggled .switch {
    background-color: var(--color-accent);
  }

  .toggled .slider {
    transform: translateX(30px);
  }
</style>
