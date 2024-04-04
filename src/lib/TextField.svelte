<script lang="ts">
  export let name: string
  export let label: string
  export let value: string = ''
  export let errors: { [key: string]: string }
  export let type: 'text' | 'number' | 'password' | 'textarea' | 'email' = 'text'
  export let rows: number | undefined = undefined
</script>

<label>
  {#if type === 'textarea'}
    <textarea {value} placeholder=" " {rows} {name}></textarea>
  {:else}
    <input {name} {value} placeholder=" " {type} />
  {/if}<span class="label-container">{label}</span>
  {#if errors?.[name]}
    <span class="error">{errors[name]}</span>
  {/if}
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    position: relative;
  }

  .label-container {
    padding: 5px;
    position: absolute;
    top: var(--16px);
    left: 10px;
    cursor: text;
    background-color: var(--color-body);
    scale: 1;
    transition: transform 0.3s;
  }

  input:focus + .label-container,
  input:not(:placeholder-shown) + .label-container,
  textarea:focus + .label-container,
  textarea:not(:placeholder-shown) + .label-container {
    transform: translateY(calc(var(--22px) * -1));
    scale: 0.9;
  }

  input[type='text'],
  input[type='number'],
  input[type='password'],
  input[type='email'] {
    height: var(--40px);
  }

  textarea,
  input {
    color: inherit;
    background-color: var(--color-body);
    border: 2px solid var(--color-text);
    padding: 0.6rem;
    font-family: inherit;
    width: 100%;
    font-size: inherit;
    outline-offset: 4px;
    border-radius: var(--theme-border-radius);
  }

  textarea:focus,
  input:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: var(--color-outline);
  }
</style>
