<script>
 import Card from './Card.svelte';
 export let results = [];

</script>
<style>
  .TimeLine {
    padding: 4em 0 0 0;
  }
</style>
<div class="TimeLine">
 <div class="TimeLine-container">
  {#each results as result}
  <Card {...result} />
  {:else}
     <p>Loading...</p>
  {/each}
 </div>
</div>