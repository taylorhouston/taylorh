<script lang="ts">
  export let className: string = ""
</script>

<p class={className}>
  <slot />
</p>

<style>
  p {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
