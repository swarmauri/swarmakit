<script lang="ts">
  export let isOpen: boolean = false;
  export let isDisabled: boolean = false;
  export let title: string = 'Modal Title';
  export let content: string = 'This is the modal content.';

  const closeModal = () => {
    if (!isDisabled) {
      isOpen = false;
    }
  };

  const handleBackdropClick = (event: MouseEvent) => {
    if (!isDisabled && event.target === event.currentTarget) {
      closeModal();
    }
  };
</script>

{#if isOpen}
  <div
    class="modal-backdrop"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
    on:click={handleBackdropClick}
  >
    <div class="modal" role="document">
      <div class="modal-header">
        <h2 id="modal-title">{title}</h2>
        <button class="close-button" on:click={closeModal} aria-label="Close Modal" disabled={isDisabled}>
          &times;
        </button>
      </div>
      <div class="modal-content">
        <p>{content}</p>
      </div>
    </div>
  </div>
{/if}

<style lang="css">
  @import './Modal.css';
</style>