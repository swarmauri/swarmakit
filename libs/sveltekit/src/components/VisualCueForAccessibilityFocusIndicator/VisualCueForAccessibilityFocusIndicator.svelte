<script lang="ts">
  export let isFocused: boolean = false;
</script>

<div class="focus-indicator" tabindex="0" class:is-focused={isFocused} aria-label="Focus indicator">
  <p>Focus Indicator</p>
</div>

<style lang="css">
  @import './VisualCueForAccessibilityFocusIndicator.css';
</style>