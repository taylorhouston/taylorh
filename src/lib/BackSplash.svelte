<script lang="ts">
  export let id: string | undefined = undefined
  export let headline: string
</script>

<div class="back-splash" {id}>
  <div class="back-splash__side back-splash__left"></div>
  <div class="back-splash__top">
    <h1>{headline}</h1>
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
    color: var(--color-text);
    padding: 0 0.6rem 10rem;
  }

  .back-splash__white {
    background-color: var(--color-body);
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
    padding: 24px var(--10px);
    margin: 0;
    font-size: var(--28px);
  }
</style>
