<script lang="ts">
  export let isVisible: boolean = true;
  export let isTyping: boolean = false;
</script>

<div class="typing-status" aria-hidden="{!isVisible}" role="status">
  {#if isVisible}
    <span>{isTyping ? 'Typing...' : 'Paused'}</span>
  {/if}
</div>

<style lang="css">
  @import './TypingStatus.css';
</style>