<script lang="ts">
  export let message: string = 'Hello!';
  export let status: 'sent' | 'received' | 'read' | 'unread' = 'unread';
</script>

<div class={`message-bubble message-bubble--${status}`} role="status">
  <p>{message}</p>
</div>

<style lang="css">
  @import './MessageBubble.css';
</style>