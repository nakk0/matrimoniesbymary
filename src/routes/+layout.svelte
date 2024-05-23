<script>
    import "../app.pcss";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="min-h-screen">
    <Navbar />
    <slot></slot>
</div>
