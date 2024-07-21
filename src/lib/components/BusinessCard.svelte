<script>
    export let name = "Mary Catherine Loscerbo";
    export let title = "Singer, Celebrant, Singing Celebrant";
    export let phone = "[do I put your number?]";
    export let email = "matrimoniesbymary@gmail.com";
    export let website = "matrimoniesbymary.com";
  </script>
  
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p>{title}</p>
      <div class="mt-4">
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website:</strong> <a href={`https://${website}`} class="link link-primary">{website}</a></p>
      </div>
    </div>
  </div>
  
  <style>
    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
    }
  </style>
  