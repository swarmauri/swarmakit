<script lang="ts">
  import { writable } from 'svelte/store';

  export interface PollOption {
    id: number;
    text: string;
    votes: number;
  }

  export let options: PollOption[] = [];
  export let totalVotes: number = 0;
  export let isClosed: boolean = false;

  const calculatePercentage = (votes: number) => {
    return totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  };
</script>

<div class="poll-results" aria-live="polite">
  {#each options as { id, text, votes }}
    <div class="option" aria-label={`Option ${id}: ${text}`}>
      <span class="option-text">{text}</span>
      <div class="progress-bar" style="width: {calculatePercentage(votes)}%">
        <span class="votes" aria-label={`Votes: ${votes}`}>{votes} votes</span>
      </div>
    </div>
  {/each}
  {#if isClosed}
    <div class="poll-status">Poll is closed</div>
  {/if}
</div>

<style lang="css">
  .poll-results {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 6px;
    background-color: #f0f0f0;
  }

  .option-text {
    font-weight: bold;
  }

  .progress-bar {
    background-color: #6200ea;
    height: 20px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }

  .votes {
    font-size: 0.8rem;
  }

  .poll-status {
    font-size: 1rem;
    color: red;
    font-weight: bold;
    text-align: center;
  }
</style>