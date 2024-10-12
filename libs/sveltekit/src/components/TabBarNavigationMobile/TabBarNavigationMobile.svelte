<script lang="ts">
  export let active: boolean = false;
  export let disabled: boolean = false;

  const handleClick = () => {
    if (!disabled) {
      active = !active;
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      active = !active;
    }
  };
</script>

<div
  class={`tab-bar ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
  role="tablist"
  tabindex={disabled ? undefined : 0}
  on:click={handleClick}
  on:keypress={handleKeyPress}
>
  <div class="tab" role="tab">Tab 1</div>
  <div class="tab" role="tab">Tab 2</div>
  <div class="tab" role="tab">Tab 3</div>
</div>

<style lang="css">
  @import './TabBarNavigationMobile.css';
</style>