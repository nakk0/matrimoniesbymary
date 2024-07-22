<script>
    import instagram from "$lib/images/logos/instagram.png";
    import facebook from "$lib/images/logos/facebook.png";

    export let name = "";
    export let title = "";
    export let email = "";
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{title}</p>
        <div class="mt-4">
            <p><strong>Email:</strong> {email} </p>
            
            <p class="flex">
                <strong class="place-self-center">Social:</strong>
                <a href="https://www.instagram.com/matrimonies_by_mary?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <img src="{instagram}" alt="" class="max-w-8">
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556271417127" target="_blank">
                    <img src="{facebook}" alt="" class="max-w-8">
                </a>
            </p>
        </div>
    </div>
</div>

<style>
.card-title {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
  