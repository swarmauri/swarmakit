
<template>
  <div class="image-choice-poll" role="group" aria-labelledby="image-choice-poll-label">
    <div id="image-choice-poll-label" class="poll-label">{{ question }}</div>
    <div class="options">
      <button
        v-for="(option, index) in options"
        :key="index"
        :class="['option', { selected: selectedOption === index, disabled: disabled }]"
        @click="selectOption(index)"
        :disabled="disabled"
        :aria-pressed="selectedOption === index"
        aria-label="Option"
      >
        <img :src="option.image" :alt="option.alt" class="option-image" />
      </button>
    </div>
    <div class="result-display" v-if="resultsVisible && selectedOption !== null">
      Selected: {{ options[selectedOption].alt }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
  image: string;
  alt: string;
}

export default defineComponent({
  name: 'ImageChoicePoll',
  props: {
    question: {
      type: String,
      required: true
    },
    options: {
      type: Array as () => Option[],
      required: true
    },
    initialValue: {
      type: Number,
      default: null
    },
    resultsVisible: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const selectedOption = ref(props.initialValue);

    const selectOption = (index: number) => {
      if (!props.disabled) {
        selectedOption.value = index;
      }
    };

    return {
      selectedOption,
      selectOption
    };
  }
});
</script>




<style scoped lang="css">
@import './ImageChoicePoll.css';
</style>
