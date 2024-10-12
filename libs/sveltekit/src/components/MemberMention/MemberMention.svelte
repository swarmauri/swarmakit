<script lang="ts">
  export let visible: boolean = true;
  export let clicked: boolean = false;
  export let memberName: string = 'Member';

  function handleClick() {
    clicked = true;
  }
</script>

{#if visible}
  <div 
    class="member-mention" 
    role="button" 
    aria-pressed={clicked}
    tabindex="0"
    on:click={handleClick} 
    on:keydown={(e) => e.key === 'Enter' ? handleClick() : null}
  >
    @{memberName}
  </div>
{/if}

<style lang="css">
  @import './MemberMention.css';
</style>