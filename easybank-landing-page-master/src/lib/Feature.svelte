<script>
  let { featureImg, title, description } = $props();
</script>

<div class="features__item">
  <div class="features__icon">
    <img src="{featureImg}">
  </div>
  <div class="features__title">
    {title}
  </div>
  <div class="features__description">
    {description}
  </div>
</div>

<style lang="scss">
  .features__item {
    padding: 0.9375rem;

    @media (min-width: 40rem) {
      flex: 0 0 50%;
    }

    @media (min-width: 64rem) {
      flex: 1;
    }
  }

  .features__icon {
    margin-bottom: 1.875rem;

    @media (min-width: 64rem) {
      margin-bottom: 2.75rem;
    }
  }

  .features__title {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.15;
    color: var(--darkBlue);
    margin-bottom: 1rem;

    @media (min-width: 64rem) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  .features__description {
    font-size: var(--font-sm);
    line-height: 1.5;
  }
</style>