<script lang="ts">
  export type HeroState = 'displayed' | 'hidden' | 'withImage' | 'withText' | 'withCTA' | 'fullscreen';
  export let state: HeroState = 'displayed';
  export let imageSrc: string = '';
  export let text: string = 'Welcome to our website';
  export let ctaText: string = 'Get Started';
</script>

<div class="hero" class:hidden={state === 'hidden'} class:fullscreen={state === 'fullscreen'}>
  {#if state === 'withImage' || state === 'fullscreen'}
    <img src={imageSrc} alt="Hero Image" class="hero-image" />
  {/if}
  {#if state === 'withText' || state === 'fullscreen'}
    <div class="hero-text">{text}</div>
  {/if}
  {#if state === 'withCTA' || state === 'fullscreen'}
    <button class="hero-cta" on:click={() => alert('CTA Clicked!')}>{ctaText}</button>
  {/if}
</div>

<style lang="css">
  @import './Hero.css';
</style>