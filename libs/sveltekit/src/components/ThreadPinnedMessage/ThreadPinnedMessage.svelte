<script lang="ts">
  export type PinnedState = 'pinned' | 'unpinned' | 'visible' | 'hidden';
  export let state: PinnedState = 'unpinned';

  function getMessage() {
    switch (state) {
      case 'pinned':
        return '📌 Pinned Message';
      case 'visible':
        return '👁️ Visible Message';
      case 'hidden':
        return '🙈 Hidden Message';
      default:
        return '📎 Unpinned Message';
    }
  }
</script>

<div class="pinned-message" aria-label={`Message is ${state}`}>
  {getMessage()}
</div>

<style lang="css">
  @import './ThreadPinnedMessage.css';
</style>