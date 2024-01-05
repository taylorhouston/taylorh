<script lang="ts">
</script>
<div class="error">
	<div class="error-headline">ERROR</div>
	<slot />
</div>
<style>
	.error{
			border: .2rem solid var(--highlight);
			border-radius: 5px;
      padding: 1rem;
			margin-bottom: 2rem;
	}

	.error-headline{
			color: var(--highlight);
			padding-bottom: 1.5rem;
			text-transform: uppercase;
	}

</style>