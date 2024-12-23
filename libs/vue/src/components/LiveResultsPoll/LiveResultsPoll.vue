
<template>
  <div class="live-results-poll" role="group" aria-labelledby="live-results-poll-label">
    <div id="live-results-poll-label" class="poll-label">{{ question }}</div>
    <div class="options">
      <button
        v-for="(option, index) in options"
        :key="index"
        :class="['option', { selected: selectedOption === index, disabled: closed }]"
        @click="selectOption(index)"
        :disabled="closed"
        :aria-pressed="selectedOption === index"
        aria-label="Option"
      >
        {{ option.text }}
        <span v-if="liveResultsVisible" class="result-percentage">
          ({{ calculatePercentage(option.votes) }}%)
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Option {
  text: string;
  votes: number;
}

export default defineComponent({
  name: 'LiveResultsPoll',
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
    liveResultsVisible: {
      type: Boolean,
      default: false
    },
    closed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const selectedOption = ref(props.initialValue);

    const totalVotes = computed(() =>
      props.options.reduce((acc, option) => acc + option.votes, 0)
    );

    const calculatePercentage = (votes: number): number =>
      totalVotes.value > 0 ? Math.round((votes / totalVotes.value) * 100) : 0;

    const selectOption = (index: number) => {
      if (!props.closed) {
        selectedOption.value = index;
        props.options[index].votes += 1;
      }
    };

    return {
      selectedOption,
      calculatePercentage,
      selectOption
    };
  }
});
</script>




<style scoped lang="css">
@import './LiveResultsPoll.css';
</style>
