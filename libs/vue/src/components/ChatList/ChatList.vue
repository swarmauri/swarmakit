<template>
  <div class="chat-list" role="list">
    <div
      v-if="chats.length === 0"
      class="chat-list-empty"
      aria-label="No chats available"
    >
      No chats available
    </div>
    <div
      v-else
      v-for="(chat, index) in chats"
      :key="chat.id"
      :class="['chat-item', { selected: selectedChatId === chat.id }]"
      role="listitem"
      tabindex="0"
      @click="$emit('select', chat.id)"
    >
      {{ chat.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Chat {
  id: string;
  name: string;
}

export default defineComponent({
  name: 'ChatList',
  props: {
    chats: {
      type: Array as PropType<Chat[]>,
      required: true,
    },
    selectedChatId: {
      type: String as PropType<string | null>,
      default: null,
    },
  },
});
</script>

<style lang="css">
@import './ChatList.css';
</style>