<script lang="ts">
  type PostSchema = {
    content: string;
    user: string;
    date: Date;
    image: string;
    likes: number;
    comments: number;
    alt: string;
  };

  export let post: PostSchema;
</script>

<div class="flex flex-col gap-1 text-base">
  <div class="flex gap-3">
    <p class="font-medium">{post.user}</p>
    <p class="text-white-secondary">{post.date.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}</p>
  </div>
  <p>{@html post.content}</p>
  <div class="mt-2">
    <img src={post.image} alt={post.alt} class="w-1/2 border border-black-border h-auto min-h-80 object-fill rounded-lg" />
  </div>
  <div class="flex gap-4 mt-2 text-white-charcoal items-center">
    <div class="flex items-center px-2 py-2 rounded-full bg-transparent hover:bg-white-hover">
      <button class="flex items-center gap-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        {post.likes}
      </button>
    </div>
    <div class="flex items-center px-2 py-2 rounded-full bg-transparent hover:bg-white-hover">
      <button class="flex items-center gap-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
        </svg>
        {post.comments}
      </button>
    </div>
  </div>
</div>
