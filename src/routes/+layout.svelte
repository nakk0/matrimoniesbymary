<!-- src/routes/__layout.svelte -->
<script>
    import "../app.pcss";
    import Navbar from "$lib/components/Navbar.svelte";
    import { page } from "$app/stores";
</script>

<div class="flex flex-col scrollbar-hide overflow-auto min-h-screen">
    <Navbar />
    <div class:flex-grow={$page.url.pathname === "/contact"} class="md:flex-grow flex md:justify-center md:items-center">
        <slot></slot>
    </div>
</div>
