<template>
  <div class="password-confirmation-container">
    <label :for="passwordId" class="input-label">{{ passwordLabel }}</label>
    <input
      :id="passwordId"
      type="password"
      v-model="password"
      class="password-input"
      :disabled="disabled"
      aria-describedby="passwordHelp"
      :aria-invalid="!!error"
    />
    <label :for="confirmPasswordId" class="input-label">{{ confirmPasswordLabel }}</label>
    <input
      :id="confirmPasswordId"
      type="password"
      v-model="confirmPassword"
      class="password-input"
      :disabled="disabled"
      aria-describedby="confirmPasswordHelp"
      :aria-invalid="!!error"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
    <span v-if="matching && !error" class="success-message">Passwords match</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  name: 'PasswordConfirmationField',
  props: {
    passwordLabel: {
      type: String,
      default: 'Password',
    },
    confirmPasswordLabel: {
      type: String,
      default: 'Confirm Password',
    },
    passwordId: {
      type: String,
      required: true,
    },
    confirmPasswordId: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const password = ref('');
    const confirmPassword = ref('');
    const matching = computed(() => password.value === confirmPassword.value);

    watch([password, confirmPassword], () => {
      if (!props.disabled && !matching.value) {
        props.error = 'Passwords do not match';
      } else {
        props.error = '';
      }
    });

    return {
      password,
      confirmPassword,
      matching,
    };
  },
});
</script>

<style lang="css">
@import './PasswordConfirmationField.css';
</style>