<script lang="ts">
  import Limiter from "./Limiter.svelte"

  export let id: string | undefined = undefined
  export let headline: string
  export let paragraph: string | undefined = undefined
</script>

<div class="back-splash" {id}>
  <div class="back-splash__side back-splash__left"></div>
  <div class="back-splash__top">
    <h1>{headline}</h1>
    {#if paragraph}
      <Limiter>{paragraph}</Limiter>
    {/if}
  </div>
  <div class="back-splash__side back-splash__right"></div>
</div>
<div class="back-splash__white">
  <slot />
</div>

<style>
  .back-splash {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .back-splash__side {
    width: 5%;
    background-color: var(--off-body);
  }

  .back-splash__right {
    border-bottom-left-radius: 0.5rem;
  }

  .back-splash__left {
    border-bottom-right-radius: 0.5rem;
  }

  .back-splash__top {
    width: 90%;
    background-color: var(--off-body);
    color: var(--text);
    padding: 0 0.6rem 10rem;
  }

  .back-splash__white {
    background-color: var(--body);
    width: 100%;
    left: 0;
    right: 0;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: -10rem;
    @media (min-width: 768px) {
      width: 90%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    padding: 2rem;
  }

  h1 {
    text-align: center;
    padding: 2rem 1rem;
    margin: 0;
    font-size: 2.8rem;
  }
</style>
