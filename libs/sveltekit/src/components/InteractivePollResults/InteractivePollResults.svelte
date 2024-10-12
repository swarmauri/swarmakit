<script lang="ts">
  import { writable } from 'svelte/store';

  export let options: { option: string; votes: number }[] = [];
  export let isClosed: boolean = false;

  const totalVotes = writable(0);
  $: totalVotes.set(options.reduce((total, option) => total + option.votes, 0));

  function vote(index: number) {
    if (isClosed) return;
    options[index].votes += 1;
    totalVotes.update((n) => n + 1);
  }
</script>

<div class="interactive-poll-results" role="list">
  {#each options as { option, votes }, index}
    <div class="option" role="listitem">
      <span>{option}</span>
      <span>{votes} votes</span>
      <button on:click={() => vote(index)} aria-disabled={isClosed}>
        Vote
      </button>
    </div>
  {/each}
  <div class="total" aria-live="polite">Total Votes: {$totalVotes}</div>
</div>

<style lang="css">
  @import './InteractivePollResults.css';
</style>