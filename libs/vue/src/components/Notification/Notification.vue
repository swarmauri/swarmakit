
<template>
  <div
    class="notification"
    :class="notificationType"
    role="alert"
    v-if="!localIsDismissed"
  >
    <span>{{ message }}</span>
    <button class="close-btn" @click="dismiss" aria-label="Dismiss notification">✖</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: {
    notificationType: {
      type: String as PropType<'success' | 'error' | 'warning'>,
      default: 'success',
    },
    message: {
      type: String,
      default: 'This is a notification message.',
    },
    isDismissed: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const localIsDismissed = ref(props.isDismissed);

    const dismiss = () => {
      localIsDismissed.value = true;
    };

    return { localIsDismissed, dismiss };
  },
});
</script>




<style scoped lang="css">
@import './Notification.css';
</style>
