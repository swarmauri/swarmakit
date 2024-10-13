<script lang="ts">
  export let icon: string;
  export let label: string;
  export let disabled: boolean = false;
</script>

<button
  class="icon-button"
  disabled={disabled}
  aria-label={label}
>
  <img src={icon} alt={label} aria-hidden="true" />
</button>

<style lang="css">
  .icon-button {
    padding: 10px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-button img {
    width: 24px;
    height: 24px;
  }

  .icon-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .icon-button:not(:disabled):hover {
    background-color: rgba(0, 123, 255, 0.1);
  }

  .icon-button:not(:disabled):active {
    background-color: rgba(0, 123, 255, 0.2);
  }

  @media (max-width: 320px) {
    .icon-button img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 321px) and (max-width: 480px) {
    .icon-button img {
      width: 22px;
      height: 22px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .icon-button img {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 769px) {
    .icon-button img {
      width: 26px;
      height: 26px;
    }
  }
</style>