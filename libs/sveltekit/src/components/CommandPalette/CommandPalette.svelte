<script lang="ts">
  import { onMount } from 'svelte';
  export let isOpen: boolean = false;
  export let commands: string[] = [];
  export let activeIndex: number = -1;

  let inputElement: HTMLInputElement;

  function togglePalette() {
    isOpen = !isOpen;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % commands.length;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      activeIndex = (activeIndex - 1 + commands.length) % commands.length;
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      selectCommand(commands[activeIndex]);
    }
  }

  function selectCommand(command: string) {
    const event = new CustomEvent('select', {
      detail: { command }
    });
    dispatchEvent(event);
  }

  onMount(() => {
    if (isOpen) {
      inputElement.focus();
    }
  });
</script>

<div class="command-palette" class:open={isOpen}>
  {#if isOpen}
    <input
      bind:this={inputElement}
      type="text"
      placeholder="Type a command..."
      on:keydown={handleKeyDown}
      aria-label="Command palette input"
    />
    <ul>
      {#each commands as command, index}
        <li
          class:active={index === activeIndex}
          on:click={() => selectCommand(command)}
          role="option"
          tabindex="0"
          on:keypress={(e) => e.key === 'Enter' && selectCommand(command)}
        >
          {command}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './CommandPalette.css';
</style>