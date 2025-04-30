<script>
  let { backgroundImg, author, title, description } = $props();
</script>

<a href="/" class="articles__items">
  <div class="articles__image">
    <img src="{backgroundImg}" alt="{title}">
  </div>
  <div class="articles__text">
    <div class="articles__author">
      {author}
    </div>
    <div class="articles__title">
      {title}
    </div>
    <div class="articles__description">
      {description}
    </div>
  </div>
</a>

<style lang="scss">
  .articles {
    &__items {
      background-color: var(--white);
      border-radius: 0.3125rem;
      overflow: hidden;
      box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
      transition: transform 200ms ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:hover .articles__title {
        color: var(--limeGreen);
      }
    }

    &__image {
      height: 12.5rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;

      img {
        height: 100%;
        width: 100%;
      }
    }

    &__text {
      color: var(--grayishBlue);
      padding: 1.875rem 1.875rem 2.5rem 1.875rem; 

      @media (min-width: 40rem) {
        padding: 1.875rem 1.5625rem;
      }
    }

    &__author {
      font-size: 0.625rem;
      margin-bottom: 0.75rem;
    }

    &__title {
      font-size: 1.0625rem;
      line-height: 1.2;
      color: var(--darkBlue);
      margin-bottom: 0.5rem;
      cursor: pointer;
    }

    &__description {
      font-size: 0.8125rem;
    }
  }
</style>