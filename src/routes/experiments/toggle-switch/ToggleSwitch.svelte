<label tabindex="0">
  <input type="checkbox" />
  Toggle me
  <span class="switch">
    <span class="slider" />
  </span>
</label>

<style>
  input[type='checkbox'] {
    display: none;
  }

  .slider {
    display: block;
    border-radius: 15px;
    height: 30px;
    width: 30px;
    background-color: var(--color-body);
    transition: transform 0.5s;
    box-shadow: 2px 2px 4px var(--off-body);
  }

  .switch {
    display: block;
    border: 1px solid var(--off-body);
    background-color: var(--color-body);
    width: 70px;
    padding: 4px;
    height: 40px;
    border-radius: 20px;
    transition: background-color 0.5s;
  }

  input[type='checkbox']:checked + .switch .slider {
    transform: translateX(30px);
  }
  input[type='checkbox']:checked + .switch {
    background-color: var(--color-accent);
  }
</style>
