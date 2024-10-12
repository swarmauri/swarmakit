<script lang="ts">
  export type ContainerState = 'fluid' | 'fixed' | 'centered' | 'fullWidth';
  export let state: ContainerState = 'fluid';

  const getClass = () => {
    switch (state) {
      case 'fluid':
        return 'container-fluid';
      case 'fixed':
        return 'container-fixed';
      case 'centered':
        return 'container-centered';
      case 'fullWidth':
        return 'container-fullWidth';
      default:
        return 'container-fluid';
    }
  };
</script>

<div class={getClass()} role="main">
  <slot />
</div>

<style lang="css">
  @import './Container.css';
</style>