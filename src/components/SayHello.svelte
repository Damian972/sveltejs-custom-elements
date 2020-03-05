<script>
  export let to = "john";
</script>

<svelte:options tag="say-hello" />
<h2>Hello, {to.toUpperCase()} !!</h2>
