<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div class="typing-indicator" role="alert">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
{/if}

<style lang="css">
  @import './TypingIndicator.css';
</style>