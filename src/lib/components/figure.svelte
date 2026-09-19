<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    src: string;
    alt: string;
    children?: Snippet;
  }

  let { src, alt, children }: Props = $props();
</script>

<figure>
  <img {src} {alt} />
  {#if children}
    <figcaption>{@render children()}</figcaption>
  {/if}
</figure>
