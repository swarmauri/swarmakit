<script lang="ts">
  export type FocusState = 'focused' | 'unfocused';
  export let state: FocusState = 'unfocused';

  function handleFocus() {
    state = 'focused';
  }

  function handleBlur() {
    state = 'unfocused';
  }
</script>

<div
  class={`focus-indicator focus-indicator-${state}`}
  tabindex="0"
  on:focus={handleFocus}
  on:blur={handleBlur}
  role="button"
  aria-label="Focus Indicator"
>
  <span>{state === 'focused' ? 'Focused' : 'Unfocused'}</span>
</div>

<style lang="css">
  @import './VisualCueForAccessibilityFocusIndicator.css';
</style>