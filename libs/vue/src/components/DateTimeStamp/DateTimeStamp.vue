<template>
  <time v-if="isDisplayed" class="date-time-stamp" :datetime="dateTime" aria-label="Date and Time">
    {{ formattedDateTime }}
  </time>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'DateTimeStamp',
  props: {
    dateTime: {
      type: String,
      required: true,
    },
    state: {
      type: String as PropType<'displayed' | 'hidden'>,
      default: 'displayed',
      validator: (value: string) => ['displayed', 'hidden'].includes(value),
    },
  },
  setup(props) {
    const isDisplayed = computed(() => props.state === 'displayed');
    const formattedDateTime = computed(() => new Date(props.dateTime).toLocaleString());

    return { isDisplayed, formattedDateTime };
  },
});
</script>

<style lang="css">
@import './DateTimeStamp.css';
</style>