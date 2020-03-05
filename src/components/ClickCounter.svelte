<script>
  let count = 0;

  function handle(e) {
    count++;
    this.dispatchEvent(
      new CustomEvent("clicked", {
        detail: count,
        // turn on true to jump over shadow dom
        composed: true
      })
    );
  }
</script>

<svelte:options tag="click-counter" />
<button on:click={handle}>Add +1</button>
