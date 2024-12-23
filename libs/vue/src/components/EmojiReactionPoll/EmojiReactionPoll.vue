

<template>
  <div class="emoji-reaction-poll" role="radiogroup" aria-labelledby="poll-question">
    <p id="poll-question">{{ question }}</p>
    <div class="emojis">
      <button
        v-for="(emoji, index) in emojis"
        :key="index"
        :aria-checked="index === selectedEmoji"
        :disabled="isDisabled"
        @click="selectEmoji(index)"
        class="emoji"
        :class="{ selected: index === selectedEmoji }"
        role="radio"
      >
        {{ emoji }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EmojiReactionPoll',
  props: {
    question: {
      type: String,
      required: true,
    },
    emojis: {
      type: Array as () => string[],
      default: () => ['😀', '😐', '😢'],
    },
    initialSelection: {
      type: Number,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    showResults: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectedEmoji = ref(props.initialSelection);

    const selectEmoji = (index: number) => {
      if (!props.isDisabled) {
        selectedEmoji.value = index;
      }
    };

    return {
      selectedEmoji,
      selectEmoji,
    };
  },
});
</script>




<style scoped lang="css">
@import './EmojiReactionPoll.css';
</style>
