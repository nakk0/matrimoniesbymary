<script>
    import sideimage from "$lib/images/IMG_6628.jpeg";

    let paragraphs = [
        "Hello and Benvenuti! My name is Mary Loscerbo. I’m a Canadian born celebrant and musician with Italian ancestry. I’ve been living in Tuscany for over 30 years.",
        "My musical life has been wonderfully diverse. I have sung in castles, theatres and cafés with my own band. I have sung solo roles in fully staged operas and in front of 60-piece jazz orchestras. In my spare time, I paddle with the Pink Ladies Dragonboat Team on the Arno River. I love to whip up fried zucchini flowers and can make a killer ossobuco paired with a great Brunello wine. I love having family and friends over to share stories and laugh together.",
        "Having had a destination wedding in southern Italy, I know how hard it can be to line up all the pieces. With all my experience as a singer and celebrant, I can help you navigate and coordinate your ceremony to make it run as smoothly as possible. When it comes to your special day, I will also bring passion, warmth, and a collaborative spirit. Together we will discuss your vision for your ceremony through video chats and emails. I can help you with your choice of readings, vows, symbolic rituals, and music.",
        "So, if you're planning to tie the knot amidst the rolling hills of Tuscany and you're in need of a celebrant who can also add special musical touches to your ceremony, then you’ve found her!",
        "I look forward to making your ceremony an enchanting combination of spoken words and heartfelt performances that reflect your unique love story. 🎶💕"
    ]
</script>

<div class="grid min-w-full pb-10">
    <div class="grid lg:grid-cols-2 grid-cols-1 max-w-6xl sm:mt-16 sm:m-0 m-5 place-self-center lg:mx-10 gap-10 md:mx-24 sm:mx-16">
        <div class="lg:order-2 order-1">
            <img src="{sideimage}" alt="Side Image" class="rounded-xl shadow-xl place-self-center">
        </div>
        <div class="sm:mx-10 place-self-center lg:order-1 order-2">
            <p class="elegant-font text-yellow-500 text-6xl mb-10">About me</p>
            {#each paragraphs as p}
                <p class="mt-5">{p}</p>
            {/each}
        </div>
    </div>
</div>
