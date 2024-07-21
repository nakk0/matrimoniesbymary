<script>
    import gallery from "$lib/images/gallery/index.js"
</script>

<div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
        {#each gallery as p}
        <div class="max-w-md m-5">
            <img src="{p.path}" alt="" class="rounded-lg shadow-xl">
        </div>
        {/each}
    </div>

</div>