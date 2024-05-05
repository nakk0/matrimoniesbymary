<script>
    import "../app.pcss";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="bg-white min-h-screen pt-1">
    <Navbar />
    <slot></slot>
</div>
