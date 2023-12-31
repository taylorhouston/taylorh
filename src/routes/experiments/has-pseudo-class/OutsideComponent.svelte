<div class="outer-sibling-above"></div>
<div class="outer">
  <slot />
</div>
<div class="outer-sibling">
  <p class="inner">inner paragraph</p>
</div>

<style>
  /* .outer contains .happy-day */
  .outer:has(.happy-day) {
    border: var(--text) 0.1rem solid;
  }
  /* .outer has sibling */
  .outer:has(+ .outer-sibling) {
    background-color: var(--off-body);
  }
  /* outer doesn't have outer sibling */
  .outer:has(+ :not(.outer-sibling)) {
    background: darkred;
  }
  /* has .inner OR .inner-2 */
  .outer-sibling:has(.inner, .inner-2) {
    background: var(--off-body);
  }
  /* has .inner AND .inner-2, does not apply as result, no inner-2 */
  .outer-sibling:has(.inner):has(.inner-2) {
    border: var(--text) 0.1rem solid;
  }
</style>
