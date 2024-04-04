<script lang="ts">
  export let options: { label: string; value: string | number }[]

  export let name: string
  export let legend: string | undefined = undefined
  export let onchange: ((event: any) => void) | undefined = undefined
  export let value: string | number
</script>

<fieldset>
  {#if legend}
    <legend>{legend}</legend>
  {/if}

  {#each options as option}
    <label class="radio-label">
      <input
        {name}
        on:change={onchange}
        bind:group={value}
        type="radio"
        checked={option.value === value}
        value={option.value}
      />
      {option.label}
    </label>
  {/each}
</fieldset>

<style>
  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px 0;
  }

  input[type='radio'] {
    appearance: none;
    width: var(--30px);
    height: var(--30px);
    border-radius: 1rem;
    display: grid;
    margin: 0 0.5rem 0 0;
    place-content: center;
    border: 0.2rem solid var(--color-text);
  }

  input[type='radio']:focus {
    outline-color: var(--color-outline);
    outline-offset: 4px;
    outline-style: solid;
    outline-width: 2px;
  }

  input[type='radio']::before {
    content: '';
    border-radius: 0.6rem;
    background-color: var(--color-text);
  }

  input[type='radio']:checked::before {
    width: 1rem;
    height: 1rem;
    animation: bounce 0.4s ease-in-out;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .radio-label {
    display: flex;
    align-items: center;
  }

  /* input[type='radio']:checked {
    //border: 0.2rem solid var(--color-accent);
  } */

  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.5);
    }
    66% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
