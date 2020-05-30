<script>
 import {likeCount} from '../store/store.js'
</script>
<style>
.Header {
    background-color: white;
    position: fixed;
    width: 100%;
  }
  .Header-container {
    grid-template-columns: minmax(auto, 936px);
    display: grid;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid rgba(38, 38, 38, 0.4);
  }
.Header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
  }
  .Header ul {
    list-style: none;
  }
  .Header li {
    display: inline-block;
    margin: 0 0 0 1em;
    /* font-size: 20px; */
    color: black;
    font-weight: 900;    
  }
  .Header i {
    font-size: 16px;
    color: rgba(38, 38, 38, 0.7);
    cursor: pointer;
  }

h1 {
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: black;
    font-family: "Pacifico", cursive;
    cursor: pointer;
    position: relative;
    background: #fff;
    mix-blend-mode: multiply;
    display: inline-block;
  }

h1:before {
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
<div class="Header">
<div class="Header-container">
 <div><h1 href="title">Rick y Morthy</h1></div>
 <div class="follow">
 <ul>
 <li><i class="fas fa-heart"></i>
 {$likeCount ===0 ? '' : $likeCount}
 </li>
 <li><i class="fas fa-hashtag"></i>

 </ul>
 </div>
 </div>
</div>