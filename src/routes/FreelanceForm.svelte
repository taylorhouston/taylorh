<script lang="ts">
  import { enhance } from '$app/forms'
  import Button from '$lib/Button.svelte'
  import Spinner from '$lib/Spinner.svelte'
  import TextField from '$lib/TextField.svelte'
  import RadioGroup from '$lib/RadioGroup/RadioGroup.svelte'

  //form values
  let websiteOptions: 'new' | 'maintenance' = 'new'
  let company: string = ''
  let email: string = ''

  let loading: boolean = false
  let submitted: boolean = false
  let errors: any = null
</script>

{#if !submitted}
  <form
    method="post"
    use:enhance={({ formData }) => {
      console.log('wee', formData)
      loading = true
      return async ({ update, result }) => {
        console.log(result)
        if (result.type === 'failure') {
          errors = result.data
        } else {
          submitted = true
        }

        loading = false
        await update({ reset: false })
      }
    }}
  >
    <TextField label="Name" name="name" {errors} />
    <!-- <label class="text-label">
      Name
      <input class={`text-label ${errors?.name && 'error'}`} name="name" type="text" />
      {#if errors?.name}
        <span class="error">{errors.name}</span>
      {/if}
    </label> -->
    <!-- <label class="text-label">
      Email
      <input class={`text-label ${errors?.email2 && 'error'}`} name="email2" type="text" />
      {#if errors?.email}
        <span class="error">{errors.email}</span>
      {/if}
    </label> -->
    <TextField label="Email" name="email2" {errors} />
    <label class="text-label yep">
      Email
      <input class={`text-label ${errors?.email && 'error'}`} name="email" type="text" />
      {#if errors?.email}
        <span class="error">{errors.email}</span>
      {/if}
    </label>
    <TextField label="Company" name="company" {errors} />
    <TextField label="Project Description" type="textarea" name="projectDesc" {errors} />
    <RadioGroup
      name="websiteOptions"
      bind:value={websiteOptions}
      options={[
        { label: "I don't have a website or want to start fresh", value: 'new' },
        { label: 'I already have a website and want to build on top of it', value: 'maintenance' }
      ]}
    />

    {#if websiteOptions === 'maintenance'}
      <TextField label="url of current site" name="url" type="text" {errors} />
      <TextField label="current website technologies" name="webTechnology" {errors} />
    {/if}

    <Button type="submit">
      {#if loading}
        <Spinner />{:else}send{/if}</Button
    >
  </form>
{/if}
{#if submitted}
  <h2>Thank You!</h2>
  <p>I will get in touch with you within 24-48 hours to talk about next steps!</p>
{/if}
{#if loading}
  <span><Spinner /></span>
{/if}

<style>
  h2 {
    color: var(--color-accent);
  }

  .text-label {
    display: flex;
    flex-direction: column;
  }
  .yep {
    display: none;
  }

  label {
    padding: 1rem 0;
  }

  input[type='text'] {
    height: var(--40px);
    margin-top: 0.5rem;
    color: inherit;
    background-color: var(--color-body);
    border: 0.2rem solid var(--color-accent);
    padding: 0.6rem 1.2rem;
    font-family: inherit;
    width: 100%;
    font-size: inherit;
    outline-offset: 0.4rem;
    border-radius: 5px;
  }

  input[type='text'].error {
    border-color: var(--highlight);
  }

  .error {
    padding-top: 0.5rem;
    color: var(--highlight);
  }
</style>
