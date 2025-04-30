<script>
  import Article from "./Article.svelte"

  let articleList = [
    {
      backgroundImg: "./image-currency.jpg",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      backgroundImg: "./image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      backgroundImg: "./image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      backgroundImg: "./image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    }
  ]
</script>

<section class="articles">
  <div class="articles__container container container__pall">
    <h2>Latest Articles</h2>

    <div class="articles__grid">
      {#each articleList as article (article.title)}
        <Article { ...article } />
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .articles {
    background-color: var(--veryLightGray);

    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.875rem;

      @media (min-width: 40rem) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 64rem) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>
