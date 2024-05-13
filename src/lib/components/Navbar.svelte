<script>
  import logo from "$lib/images/logo.png";
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
        <li><a href="/about-me">about me</a></li>
        <li><a href="/ceremony-planning">ceremony planning</a></li>
        <li><a href="/music-services">music services</a></li>
        <li><a href="/gallery">gallery</a></li>
        <li><a href="/vow-renewal">vow renewal</a></li>
        <li><a href="/contact-me">contact me</a></li>
        <!-- <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> -->
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/"
      ><img src={logo} alt="Matrimonies by Mary" class="max-w-11" />
      <p class="md:hidden">Matrimonies by Mary</p></a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/about-me">about me</a></li>
      <li><a href="/ceremony-planning">ceremony planning</a></li>
      <li><a href="/music-services">music services</a></li>
      <li><a href="/gallery">gallery</a></li>
      <li><a href="/vow-renewal">vow renewal</a></li>
      <li><a href="/contact-me">contact me</a></li>
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
