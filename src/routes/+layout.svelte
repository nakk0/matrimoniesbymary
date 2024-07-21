<!-- src/routes/__layout.svelte -->
<script>
    import "../app.pcss";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow flex justify-center items-center">
        <slot></slot>
    </div>
</div>
