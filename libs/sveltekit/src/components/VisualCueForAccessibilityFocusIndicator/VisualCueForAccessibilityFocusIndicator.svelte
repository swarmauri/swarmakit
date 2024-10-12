<script lang="ts">
  export enum FocusState {
    Focused = 'focused',
    Unfocused = 'unfocused'
  }

  export let state: FocusState = FocusState.Unfocused;
</script>

<div class="focus-indicator" tabindex="0" role="button" aria-pressed={state === FocusState.Focused}>
  <span class={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</span>
</div>

<style lang="css">
  @import './VisualCueForAccessibilityFocusIndicator.css';
</style>