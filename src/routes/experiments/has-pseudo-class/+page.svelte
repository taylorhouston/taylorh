<script>
  import Head from "../Head.svelte"
  import InsideComponent from "./InsideComponent.svelte"
  import OutsideComponent from "./OutsideComponent.svelte"
  import Headline from "../../Headline.svelte"
</script>

<svelte:head>
  <title>TaylorH.com - :has() pseudo class Experiment</title>
  <meta name="description" content="TaylorH.com website" />
</svelte:head>
<section>
  <Head
    headline="has pseudo classes"
    reason="These new pseudo class :has() are said to be able to change the way we write CSS. I had to take the time to investigate them."
  >
    <OutsideComponent>
      <InsideComponent />
    </OutsideComponent>
    <Headline level={2}>Conclusion</Headline>
    <p>
      The has pseudo selector is a pretty impressive gain for CSS, finally
      allowing a parent selector which would have normally required JS. This can
      allow for strategies that look at the nearby DOM (or distant) and add-on
      CSS if needed
    </p>
    <p>
      Almost immediately after this experiment, I thought of a use-case for it.
      I never enjoyed reaching out of a component in component based frameworks
      such as changing the body tag to lock the scroll of the document. Now I
      can just body:has(.overlay) my way through it without reaching out of the
      component and the CSS will remain located with the component.
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
  h3 {
    margin: 0;
  }
</style>
