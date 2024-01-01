<script>
  import Head from "../Head.svelte"
  import Modal from "./Modal.svelte"
  import {page} from '$app/stores'
  console.log('wee',$page)
</script>

<Head
  headline="Dialog Element"
  reason="I've made many popups, modals, dialogs over the years but with dialog being a recent addition to the HTML spec, hadn't really used it. Lets see what it offers."
  pathname={$page.url.pathname}
>
  <Modal />
  <h3>Conclusion</h3>
  There is quite a bit to like about the new dialog element especially on the accessibility
  front. Below is a list of functionality you get for free:
  <ul>
    <li>
      Causes the rest of the DOM to be inert which allows focus to stay within
      the dialog element (focus trap)
    </li>
    <li>Focus is also given to the first focusable element in the modal</li>
    <li>The esc key can be used to close the modal</li>
    <li>The dialog element itself has the role of a dialog</li>
    <li>
      When used with its showModal function, aria-modal="true" is included
    </li>
  </ul>
</Head>
