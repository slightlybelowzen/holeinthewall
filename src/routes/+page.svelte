<script lang="ts">
  import Post from "$lib/components/Post.svelte";

  const posts = [
    {
      content: `Went to Ukai London in Notting Hill this Saturday. 
            Fantastic music, great Japanese food and beer!
            <br />Going back next week for the DJ nights on Thursday.`,
      user: 'John Doe',
      image: '/ukai.webp',
      alt: 'Ukai Bar London',
      date: new Date("2024-01-01"),
      likes: 10,
      comments: 2,
      id: 1
    },
    {
      content: `Went to Ukai London in Notting Hill this Saturday. 
            Fantastic music, great Japanese food and beer!
            <br />Going back next week for the DJ nights on Thursday.`,
      user: 'John Doe',
      image: '/ukai.webp',
      alt: 'Ukai Bar London',
      date: new Date("2024-01-01"),
      likes: 10,
      comments: 2,
      id: 2
    },
    {
      content: `Went to Ukai London in Notting Hill this Saturday. 
            Fantastic music, great Japanese food and beer!
            <br />Going back next week for the DJ nights on Thursday.`,
      user: 'John Doe',
      image: '/ukai.webp',
      alt: 'Ukai Bar London',
      date: new Date("2024-01-01"),
      likes: 10,
      comments: 2,
      id: 3
    }
  ];
</script>

<svelte:head>
    <title>Hole in the Wall</title>
</svelte:head>

<main class="flex flex-col items-center h-[90vh] my-10 max-w-2xl mx-auto">
    {#each posts as post}
        <Post {post} />
    {/each}
</main>
