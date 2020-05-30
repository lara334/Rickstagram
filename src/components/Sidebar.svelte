<script>
import Profiles from './Profiles.svelte';
import Stories from './Stories.svelte';
import Footer from './Footer.svelte';
// export let results = [];
export let name;
export let status;

</script>
<!-- Sidebar.svelte -->
<style>
  .Sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .Sidebar-container {
    position: fixed;
  }
</style>

<div class="Sidebar">
 <div class="Sidebar-container">
  <Profiles {name} {status} />
  <Stories />
  <Footer />
 </div>
</div>