<script>
    import sideimage from "$lib/images/IMG_7906.jpeg";
    import audio from "$lib/audio/index.js";
    import { onMount } from 'svelte';

    let isIOSDevice = false;

    onMount(async () => {
    if (typeof window !== 'undefined') {
        const { isIOS } = await import('$lib/utils/IsIOS.js');
        isIOSDevice = isIOS();
    }
    });
    
</script>

<div class="grid min-w-full pb-10">
    <div class="grid lg:grid-cols-2 grid-cols-1 max-w-6xl sm:mt-16 sm:m-0 m-5 place-self-center lg:mx-10 gap-10 md:mx-24 sm:mx-16">
        <div class="lg:order-2 order-1">
            <img src="{sideimage}" alt="Side Image" class="rounded-xl shadow-xl place-self-center">
        </div>
        <div class="sm:mx-10 place-self-center lg:order-1 order-2">
            <p class="elegant-font text-yellow-500 text-6xl mb-10">Music Services</p>
            <p class="mt-5">I will help you select music that reflects your tastes, style, and mood of the event.</p>
            <p class="mt-5">Musical interludes during key moments such as:</p>
            <ol class="ms-3">
                <li><span class="me-2">♥</span>seating guests</li>
                <li><span class="me-2">♥</span>the processional</li>
                <li><span class="me-2">♥</span>recessional</li>
                <li><span class="me-2">♥</span>between poems</li>
            </ol>
            <p class="mt-5">Musical styles include:</p>
            <ol class="ms-3">
                <li><span class="me-2">♥</span>Classical</li>
                <li><span class="me-2">♥</span>Pop</li>
                <li><span class="me-2">♥</span>Jazz</li>
                <li><span class="me-2">♥</span>Soul</li>
            </ol>
            <p class="mt-5">Quality sound will be provided through a professional P.A. system and wireless mic.</p>
            <p class="mt-5">If you'd prefer to be accompanied by only instrumental music, I can provide the right musicians.</p>
            <p class="mt-5">Here are some preview tracks of me singing:</p>
            {#each audio as a}
                <div>
                    <p class="mt-5" class:text-center={!isIOSDevice}><strong>{a.name}</strong></p>
                    <audio controls class="min-w-full">
                        <source src="{a.path}" type="audio/mp3">
                        audio player not supported by your browser.
                    </audio>
                </div>   
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
