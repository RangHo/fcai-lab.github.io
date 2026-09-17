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
  <figure class="flex-none m-2 w-1/6">
    <img
      class="w-full"
      src={profile}
      alt={`Profile image for {name}`}
    />
  </figure>
  <div class="flex-initial p-2 w-5/6">
    <h3>{name}</h3>
    {@render children()}
  </div>
</article>
