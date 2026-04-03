<script>
    import sideimage from "$lib/images/IMG_7123.jpeg";
    import SEO from "$lib/components/SEO.svelte";

    let paragraphs = [
        "Think it's time to dust off the old promises and give 'em a shiny new coat?",
        "Want to remind each other why you’re in this crazy adventure together surrounded by your kids and maybe even grandkids?",
        "I’ve got you covered! Let me assist in making your vow renewal ceremony extra special and unforgettable."
    ]
</script>

<SEO title="Vow Renewal" description="Think it's time to dust off the old promises and give 'em a shiny new coat? Want to remind each other why you’re in this crazy adventure together surrounded by your kids and maybe even grandkids? I’ve got you covered! Let me assist in making your vow renewal ceremony extra special and unforgettable." />

<div class="grid min-w-full pb-5">
    <div class="grid lg:grid-cols-2 grid-cols-1 max-w-6xl sm:mt-16 sm:m-0 m-5 place-self-center lg:mx-10 gap-10 md:mx-24 sm:mx-16">
        <div class="lg:order-2 order-1">
            <img src="{sideimage}" alt="Side Image, a patch of grass looking over a valley with a view and chairs" class="rounded-xl shadow-xl place-self-center">
        </div>
        <div class="sm:mx-10 place-self-center lg:order-1 order-2">
            <h1 class="elegant-font text-yellow-500 text-6xl mb-10">Vow Renewal</h1>
            {#each paragraphs as p}
                <p class="mt-5">{p}</p>
            {/each}
            <div class="mt-5">
                <a href="/contact">
                    <button class="btn">
                    contact me
                    </button>
                </a>
            </div>
            
            
        </div>
    </div>
</div>
