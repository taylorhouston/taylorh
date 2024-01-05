<script lang="ts">
  import { enhance } from "$app/forms"
  import Button from "$lib/Button.svelte"
  import Spinner from '$lib/Spinner.svelte';
  import TextField from '$lib/TextField.svelte';

  let websiteOptions: "new" | "maintenance" = "new"
  let loading: boolean = false
  let submitted: boolean = false
  let errors: any = null
</script>

{#if !submitted}
  <form
    method="post"
    use:enhance={({ formData }) => {
      console.log("wee", formData)
      loading = true
      return async ({ update, result }) => {
        console.log(result)
        if (result.type === "failure") {
          errors = result.data
        } else {
          submitted = true
        }

        loading = false
        await update({ reset: false })
      }
    }}
  >
    <label class="text-label">
      Name
      <input
        class={`text-label ${errors?.name && "error"}`}
        name="name"
        type="text"
      />
      {#if errors?.name}
        <span class="error">{errors.name}</span>
      {/if}
    </label>
    <label class="text-label">
      Email
      <input
        class={`text-label ${errors?.email && "error"}`}
        name="email"
        type="text"
      />
      {#if errors?.email}
        <span class="error">{errors.email}</span>
      {/if}
    </label>
    <label class="text-label">
      Company
      <input
        class={`text-label ${errors?.company && "error"}`}
        name="company"
        type="text"
      />
    </label>
    <TextField
      label="Project Description"
      name="projectDesc"
      errors={errors}
    />
    <label class="radio-label">
      <input
        name="websiteOptions"
        bind:group={websiteOptions}
        type="radio"
        value="new"
      /><span class="radio"><span class="radio-select" /></span>I don't have a
      website or want to start fresh
    </label>
    <label class="radio-label">
      <input
        name="websiteOptions"
        bind:group={websiteOptions}
        type="radio"
        value="maintenance"
      /><span class="radio"><span class="radio-select" /></span> I already have a
      website and want to build on top of it
    </label>
    {#if websiteOptions === "maintenance"}
      <label>
        url of current site
        <input name="url" type="text" />
      </label>
      <label>
        current website technologies
        <input name="webTechnology" type="text" />
      </label>
    {/if}

    <Button type="submit">
      {#if loading} <Spinner />{:else}send{/if}</Button>
  </form>
{/if}
{#if submitted}
  <h2>Thank You!</h2>
  <p>
    I will get in touch with you within 24-48 hours to talk about next steps!
  </p>
{/if}
{#if loading}
  <span><Spinner /></span>
{/if}

<style>
  h2 {
    color: var(--primary);
  }

  .text-label {
    display: flex;
    flex-direction: column;
  }

  label {
    padding: 1rem 0;
  }

  input[type="text"],
  textarea {
    margin-top: 0.5rem;
    color: inherit;
    background-color: var(--body);
    border: 0.2rem solid var(--primary);
    padding: 0.6rem 1.2rem;
    font-family: inherit;
    width: 100%;
    font-size: inherit;
    outline-offset: 0.4rem;
    border-radius: 5px;
  }

  input[type="text"].error {
    border-color: var(--highlight);
  }

  input[type="text"] {
    height: 4rem;
  }

  input[type="radio"] {
    display: none;
  }

  .radio-label {
    display: flex;
    align-items: center;
  }

  .radio {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 0.5rem 0 0;
    border-radius: 1.2rem;
    border: 0.2rem solid var(--primary);
    z-index: 2;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  input[type="radio"]:checked + .radio .radio-select {
    background-color: var(--primary);
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.6rem;
  }

  .error {
    padding-top: 0.5rem;
    color: var(--highlight);
  }
</style>
