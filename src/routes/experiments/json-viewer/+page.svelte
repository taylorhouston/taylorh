<script lang="ts">
	import ObjectViewer from './ObjectViewer.svelte';	import Head from "../Head.svelte"
	import Headline from "$lib/Headline.svelte"
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import TextField from '$lib/TextField.svelte';
	import Message from '$lib/Message.svelte';
	const object = {
		icecream: [
			{
				flavor: 'chocolate',
				recommendedWith: {
					flavor: 'vanilla',
					recommendedWith: { flavor: 'chocolate' }
				},
			},
			{
				flavor: 'strawberry',
				recommendedWith: {flavor: 'chocolate'}
			},
			{
				flavor: 'mint',
				recommendedWith: {flavor: 'chocolate'}
			}

		]
	}
	let submittedJson:object
	let invalidJSON:boolean

	const handleSubmit = (event: SubmitEvent)=>{
		const formData = event.currentTarget as HTMLFormElement
		invalidJSON = false
		if(event.currentTarget)
			try{
				submittedJson = JSON.parse(formData.json.value)
			}catch(exception){
				invalidJSON = true
			}

	}
</script>

<svelte:head>
	<title>TaylorH.com -  Object Viewer Experiment</title>
	<meta name="description" content="A fairly quick exercise in trees, recursion and svelte's self special element." />
</svelte:head>
<section>
	<Head
		headline="JSON Viewer"
		reason="A fairly quick exercise in trees, recursion and svelte's self special element."
		pathname={$page.url.pathname}
	>
		{#if invalidJSON}
			<Message>
				bad json, please try again
			</Message>
		{/if}
		<form on:submit|preventDefault={handleSubmit}>
			<TextField name="json" label="JSON to view" />
			<Button type="submit">submit</Button>
		</form>

		<ObjectViewer json={submittedJson ?? object} />

		<Headline level={3}>Conclusion</Headline>
		<p>
			Svelte's self element makes recursion a breeze which is just a Svelte component calling itself.
		</p>
	</Head>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

</style>
