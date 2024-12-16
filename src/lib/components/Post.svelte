<script lang="ts">
  import relativeDate from "$lib/relativeDate";

  type PostSchema = {
    content: string;
    user: string;
    date: Date;
    likes: number;
    comments: number;
  };
  
  export let post: PostSchema;
</script>

<div class="flex flex-col gap-1 text-base">
  <div class="flex">
  <p class="font-medium">{post.user}</p>
  <p>{relativeDate(post.date)}</p>
</div>
  <p>{post.content}</p>
  <p>{post.likes}</p>
  <p>{post.comments}</p>
</div>

