<script lang="ts">
  export let imageBackground: string
  export let imagePath: string
  export let alt: string
</script>

<div class="size-defaults container" style="--background:{imageBackground}">
  <div class="size-defaults inner-container">
    <div class="size-defaults front-back front">
      <img class="logo" src={imagePath} {alt} />
    </div>
    <div class="size-defaults front-back back">
      <slot />
    </div>
  </div>
</div>

<style>
  .size-defaults {
    width: 320px;
    height: 240px;
    border-radius: 5px;
  }

  .inner-container {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .container {
    perspective: 1000px;

    &:hover .inner-container {
      transform: rotateY(180deg);
    }
  }

  .logo {
    max-width: 280px;
    max-height: 100px;
  }

  .front-back {
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front {
    z-index: 2;
    transform: rotateY(0deg);
    background: var(--background);
  }

  .back {
    background-color: var(--mid);
    color: var(--color-body);
    transform: rotateY(180deg);
    flex-direction: column;
    padding: 1rem;
  }
</style>
