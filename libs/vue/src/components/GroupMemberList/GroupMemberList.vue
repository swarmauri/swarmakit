<template>
  <div class="group-member-list">
    <button @click="toggleExpanded" class="toggle-button" aria-expanded="isExpanded">
      {{ isExpanded ? 'Collapse' : 'Expand' }}
    </button>
    <ul v-if="isExpanded" class="member-list" aria-label="Group Members">
      <li v-for="member in members" :key="member.id" class="member-item">
        {{ member.name }}
      </li>
      <li v-if="members.length === 0" class="no-members">
        No members
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Member {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'GroupMemberList',
  props: {
    members: {
      type: Array as () => Member[],
      required: true,
    },
  },
  setup() {
    const isExpanded = ref(false);
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };
    return { isExpanded, toggleExpanded };
  },
});
</script>

<style lang="css">
@import './GroupMemberList.css';
</style>