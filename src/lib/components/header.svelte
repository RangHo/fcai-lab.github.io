<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";

  const links = [
    { route: "/", label: "Home" },
    { route: "/members", label: "Members" },
    { route: "/projects", label: "Projects" },
    { route: "/publications", label: "Publications" },
  ] as const;
</script>

<header>
  <a href={resolve("/")}>Formal Computing and AI Lab.</a>

  <nav aria-label="Main">
    <ul>
      {#each links as { route, label } (route)}
        <li>
          <a
            href={resolve(route)}
            aria-current={page.route.id === route ? "page" : undefined}
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
