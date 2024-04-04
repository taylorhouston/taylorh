<script lang="ts">
	export let json: object
	const isArray = Array.isArray(json)
</script>
<ul>
	<li class="syntax">{isArray ? '[': '{'}</li>
		{#each Object.entries(json) as [key, value] }
			{#if typeof value === 'object'}
			<li>{key} :</li>
				<svelte:self json={value} />
			{:else if Array.isArray(value)}
				<li>{key} :</li>
				<svelte:self json={value} />
			{:else}
				<li>{key} : {value}</li>
			{/if}
		{/each}
	<li class="syntax">{isArray ? ']': '}'}</li>
</ul>
<style>
	ul{
			list-style: none;
			padding-left: 3rem;
	}

	li.syntax{
			color: var(--color-accent);
			margin-left: -1.5rem;
	}
</style>