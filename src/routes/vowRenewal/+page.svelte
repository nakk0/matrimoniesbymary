<script>
    import sideimage from "$lib/images/IMG_7123.jpeg";

    let paragraphs = [
        "Think it's time to dust off the old promises and give 'em a shiny new coat?",
        "Want to remind each other why you’re in this crazy adventure together surrounded by your kids and maybe even grandkids?",
        "I’ve got you covered! Let me assist in making your vow renewal ceremony extra special and unforgettable."
    ]
</script>

<div class="grid min-w-full pb-5">
    <div class="grid lg:grid-cols-2 grid-cols-1 max-w-6xl sm:mt-16 sm:m-0 m-5 place-self-center lg:mx-10 gap-10 md:mx-24 sm:mx-16">
        <div class="lg:order-2 order-1">
            <img src="{sideimage}" alt="Side Image" class="rounded-xl shadow-xl place-self-center">
        </div>
        <div class="sm:mx-10 place-self-center lg:order-1 order-2">
            <p class="elegant-font text-yellow-500 text-6xl mb-10">Vow Renewal</p>
            {#each paragraphs as p}
                <p class="mt-5">{p}</p>
            {/each}
        </div>
    </div>
</div>
