<script>
  import logo from "$lib/images/logo.png";
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';

  const links = [
    {href: "/about", name: "about me"},
    {href: "/ceremonyPlanning", name: "ceremony planning"},
    {href: "/musicServices", name: "music services"},
    {href: "/vowRenewal", name: "vow renewal"},
    {href: "/gallery", name: "gallery"},
    {href: "/contact", name: "contact me"},
  ]

</script>

<div class="bg-base-100 sticky top-0 w-full z-50">
  <a href="/"><p class="text-6xl hidden md:flex justify-center handycheera pt-3">Matrimonies by Mary <img src={logo} alt="Matrimonies by Mary" class="max-w-16 ms-5" /></p></a>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </div>
        <ul
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {#each links as link}
            <!--<li><a href="{link.href}" class:active={$page.url.pathname === link.href}>{link.name}</a></li>-->
            <li><button on:touchstart={() => {goto(link.href)}} on:click={() => {goto(link.href)}} class:active={$page.url.pathname === link.href}>{link.name}</button></li>
          {/each}
          <!-- <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
      <a class="btn btn-ghost text-xl flex md:hidden" href="/"
        ><img src={logo} alt="Matrimonies by Mary" class="max-w-11" />
        <p class="md:hidden handycheera">Matrimonies by Mary</p></a
      >
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        {#each links as link}
            <li><a href="{link.href}" class:active={$page.url.pathname === link.href}>{link.name}</a></li>
        {/each}
        <!-- <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li> -->
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Button</a> -->
    </div>
  </div>
</div>

<style>
  @font-face {
   font-family: 'handycheera';
   src: url('$lib/fonts/Handycheera.otf') format('truetype');
 }

 .handycheera {
   font-family: 'handycheera';
 }
</style>