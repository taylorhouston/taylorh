<script lang="ts">
	export let name: string
	export let label: string
</script>
<label class="text-label">
	{label}
	<textarea
		rows="6"
		name={name}
	></textarea>
</label>
<style>
    .text-label {
        display: flex;
        flex-direction: column;
    }

    label {
        padding: 1rem 0;
    }

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

</style>