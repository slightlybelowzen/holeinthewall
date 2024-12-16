<script lang="ts">
  type PostSchema = {
    id: number;
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

<div>
  this is the post {post.id}
</div>
