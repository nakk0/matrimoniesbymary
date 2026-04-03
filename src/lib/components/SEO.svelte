<script>
  export let title = "Matrimonies by Mary";
  export let description = "Creating memorable ceremonies through words and music.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://matrimoniesbymary.com/" />
</svelte:head>