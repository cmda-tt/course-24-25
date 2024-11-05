<script>
  import * as d3 from "d3";
  import { onMount } from 'svelte';

  onMount(() => {
    d3.select('p')
    .text('Hello World')
  });
</script>

<p></p>

<style>
  p {
    font-size: 5em;
    color: orange;
  }
</style>
