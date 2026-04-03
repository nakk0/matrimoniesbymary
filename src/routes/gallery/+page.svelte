<script>
    import gallery from "$lib/images/gallery/index.js"
    import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="Gallery" description="Explore a gallery of memorable moments from ceremonies officiated by Mary, a Canadian born celebrant and musician with Italian ancestry living in Tuscany for over 30 years." />
<div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
        {#each gallery as p}
        <div class="max-w-md m-5">
            <img src="{p.path}" alt="Gallery Image with either just mary,or mary and many happy couples" class="rounded-lg shadow-xl">
        </div>
        {/each}
    </div>

</div>