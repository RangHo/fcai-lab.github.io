<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Members" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
  ];
</script>

<header>
  <a href="/">Formal Computing and AI Lab.</a>

  <nav aria-label="Main">
    <ul>
      {#each links as { href, label } (href)}
        <li>
          <a
            {href}
            aria-current={page.url.pathname === href ? "page" : undefined}
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
