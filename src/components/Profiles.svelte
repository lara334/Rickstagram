<script>
import {onMount} from 'svelte';
let data = {};
const API = "https://rickandmortyapi.com/api/character/46";
 onMount(async () => {
     const response = await fetch(API);
     data = await response.json();
 });

</script>
<style>
  .Profile-container {
    display: flex;
    align-items: center;
  }
  .Profile-avatar img {
    width: 70px;
    height: 72px;
    border-radius: 50%;
  }
  .Profile-info {
    margin: 0 0 0 0.5em;
  }
  .Profile-info h2 {
    font-size: 24px;
    color: black;
    margin: 0;
    padding: 0;
    font-weight: 900;

  }
  .Profile-info span {
    font-size: 12px;
    font-weight: 900;
    color: #000;
  }
</style>
<div class="Profile">
<div class="Profile-container">
  <div class="Profile-avatar">
   <img src={data.image} alt="" />
  </div>
  <div class="Profile-info">
   <h2>{data.name}</h2>
  <span>{data.gender}</span>
  </div>
</div>
</div>