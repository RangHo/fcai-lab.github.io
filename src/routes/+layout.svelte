<script lang="ts">
  import type { Snippet } from "svelte";

  import Header from "$lib/components/header.svelte";

  import "./layout.css";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />

<main class="prose max-w-4/5">
  {@render children()}
</main>
