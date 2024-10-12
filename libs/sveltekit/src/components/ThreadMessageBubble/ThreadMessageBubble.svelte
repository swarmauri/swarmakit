<script lang="ts">
  export let message: string = 'This is a message.';
  export let isSent: boolean = true;
  export let isRead: boolean = false;

  function getStatus() {
    return isRead ? 'Read' : 'Unread';
  }
</script>

<div class={`message-bubble ${isSent ? 'sent' : 'received'}`}>
  <p>{message}</p>
  <span class="status">{getStatus()}</span>
</div>

<style lang="css">
  @import './ThreadMessageBubble.css';
</style>