<script>
	import Head from "../Head.svelte"
	import Headline from "$lib/Headline.svelte"
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>TaylorH.com - Toggle Switch Experiment</title>
	<meta name="description" content="TaylorH.com website" />
</svelte:head>
<section>
	<Head
		headline="Toggle Switch"
		reason="These we're popularized from mobile apps but I've never actually tried to
    make one from scratch so here we are starting with a checkbox based version:"
		pathname={$page.url.pathname}
	>
		<p>
			A little more reading about accessibility showed that these should
			actually be button elements.
		</p>
		<Headline level={3}>Conclusion</Headline>
		<p>
			Toggles are pretty simple to make and can be pretty accessible as the
			second example shows. Still, it can often seem like a checkbox would be
			just as effective. I read in a few spots that toggles can be used to
			indicate a change will be immediate (no submitting) and you should expect
			to see a change from it right away. This is an interesting way of thinking
			about a toggle though I'm not sure how well this knowledge is spread
			across the population.
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
