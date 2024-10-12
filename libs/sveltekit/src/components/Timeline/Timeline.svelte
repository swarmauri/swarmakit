<script lang="ts">
  export type TimelineState = 'visible' | 'hidden' | 'populated' | 'empty';
  export let state: TimelineState = 'visible';
  export let events: Array<{ date: string; description: string }> = [];
</script>

{#if state !== 'hidden'}
  <div class="timeline">
    {#if state === 'empty' || events.length === 0}
      <p>No events to display</p>
    {:else}
      <ul>
        {#each events as event}
          <li>
            <span class="date">{event.date}</span>
            <span class="description">{event.description}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}

<style lang="css">
  @import './Timeline.css';
</style>