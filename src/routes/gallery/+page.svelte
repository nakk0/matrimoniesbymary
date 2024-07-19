<script>
    const imageModules = import.meta.glob("$lib/images/gallery/*");
    let images = [];
    
    for (const modulePath in imageModules) {
        imageModules[modulePath]().then(({ default: imageUrl }) => {
            images.push(imageUrl);
        });
    }
</script>