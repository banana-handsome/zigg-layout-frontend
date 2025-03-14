<script>
  export let padding = "";
  export let theme = "light";
</script>

<div class="h-screen p-{padding}" data-theme={theme}>
  <slot/>
</div>
