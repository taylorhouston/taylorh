<script lang="ts">
  export let isOpen: boolean = true
  export let onClick: () => void = undefined
</script>

<button class:isOpen on:click={onClick}>
  <span />
  <span class="second-side" />
</button>

<style>
  button {
    position: relative;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    padding: 0;
    background-color: transparent;
    border: 0;
    transition: 0.5s all;
  }

  span {
    width: 3rem;
    border-radius: 5px;
    height: 0.6rem;
    background-color: var(--text);

    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
  }

  .second-side {
    transform: rotate(90deg);
  }

  .isOpen {
    transform: rotate(45deg);
  }
</style>
