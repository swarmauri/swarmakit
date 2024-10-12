<script lang="ts">
  export let options: { label: string; votes: number }[] = [];
  export let totalVotes: number = 0;
  export let status: 'live' | 'completed' | 'closed' = 'live';

  const calculatePercentage = (votes: number) => {
    return totalVotes ? Math.round((votes / totalVotes) * 100) : 0;
  };
</script>

<div class="poll-results" role="status" aria-live="polite">
  {#each options as { label, votes }}
    <div class="poll-option" tabindex="0" on:click={() => {}} on:keydown={(e) => e.key === 'Enter' && {}}>
      <span class="label">{label}</span>
      <span class="bar" style="width: {calculatePercentage(votes)}%;"></span>
      <span class="percentage">{calculatePercentage(votes)}%</span>
    </div>
  {/each}
  <div class="status">Status: {status}</div>
</div>

<style lang="css">
  @import './InteractivePollResults.css';
</style>