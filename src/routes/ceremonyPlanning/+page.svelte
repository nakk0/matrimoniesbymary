<script>
    import sideimage from "$lib/images/IMG_7057.jpeg";
    import SEO from "$lib/components/SEO.svelte";

    let paragraphs = [
        "Together, we'll create a personalized ceremony script that reflects your love story...",
        "I will help you:",
    ]
    let list =[
        "Choose readings, poetry or prose",
        "Choreograph & organize the order of the ceremony – entrances, transitions and exits",
        "Honour guests/family members not in attendance",
        "Incorporate symbolic rituals: e.g. handfasting, ring-warming, wooden wine-box time capsule and sand unity ceremony",
        "Select songs and incorporate them seamlessly into the ceremony"
    ]
</script>

<SEO title="Ceremony Planning" description="Let me help you create a personalized ceremony script that reflects your love story. I will assist you in choosing readings, choreographing the order of the ceremony, honoring guests, incorporating symbolic rituals, and selecting songs to make your ceremony unforgettable." />

<div class="grid min-w-full pb-10">
    <div class="grid lg:grid-cols-2 grid-cols-1 max-w-6xl sm:mt-16 sm:m-0 m-5 place-self-center lg:mx-10 gap-10 md:mx-24 sm:mx-16">
        <div class="lg:order-2 order-1">
            <img src="{sideimage}" alt="Side Image, Mary holding a microphone and a vow book" class="rounded-xl shadow-xl place-self-center">
        </div>
        <div class="sm:mx-10 place-self-center lg:order-1 order-2">
            <h1 class="elegant-font text-yellow-500 text-6xl mb-10">Ceremony Planning</h1>
            {#each paragraphs as p}
                <p class="mt-5">{@html p}</p>
            {/each}
            {#each list as l}
                <ol>
                    <li class="ms-3"><span class="me-2">♥</span>{l}</li>
                </ol>
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
