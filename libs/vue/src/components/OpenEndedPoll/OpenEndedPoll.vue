
<template>
  <div class="open-ended-poll" role="form" aria-labelledby="open-ended-poll-label">
    <label id="open-ended-poll-label" class="poll-label">{{ question }}</label>
    <textarea
      v-model="response"
      :disabled="disabled"
      :aria-disabled="disabled"
      aria-required="true"
      placeholder="Type your response here..."
      class="response-input"
    ></textarea>
    <button
      @click="submitResponse"
      :disabled="disabled || !response.trim()"
      class="submit-button"
    >
      Submit
    </button>
    <div v-if="resultsVisible" class="results">
      <h3>Responses:</h3>
      <ul>
        <li v-for="(res, index) in responses" :key="index">{{ res }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'OpenEndedPoll',
  props: {
    question: {
      type: String,
      required: true
    },
    initialResponses: {
      type: Array as () => string[],
      default: () => []
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
    const response = ref('');
    const responses = ref([...props.initialResponses]);

    const submitResponse = () => {
      if (response.value.trim()) {
        responses.value.push(response.value.trim());
        response.value = '';
      }
    };

    return {
      response,
      responses,
      submitResponse
    };
  }
});
</script>




<style scoped lang="css">
@import './OpenEndedPoll.css';
</style>
