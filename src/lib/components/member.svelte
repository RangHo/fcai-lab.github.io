<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    name: string;
    profile: any;
    children: Snippet;
  }

  let { name, profile, children }: Props = $props();
</script>

<article class="flex">
  <figure class="m-2 w-1/6 flex-none">
    <img class="w-full" src={profile} alt={`Profile image for ${name}`} />
  </figure>
  <div class="w-5/6 flex-initial p-2">
    <h3>{name}</h3>
    {@render children()}
  </div>
</article>
