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
    color: var(--text);
  }

  .slider {
    display: block;
    border-radius: 1.5rem;
    height: 3rem;
    width: 3rem;
    background-color: var(--body);
    transition: transform 0.5s;
    box-shadow: 0.1rem 0.1rem 0.2rem var(--text);
  }

  .switch {
    display: block;
    border: 0.1rem solid var(--text);
    background-color: var(--off-body);
    width: 70px;
    padding: 0.4rem;
    height: 40px;
    border-radius: 2rem;
    transition: background-color 0.5s;
  }

  .toggled .switch {
    background-color: var(--primary);
  }

  .toggled .slider {
    transform: translateX(30px);
  }
</style>
