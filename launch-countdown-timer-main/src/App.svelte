<script>
  import Timer from './lib/Timer.svelte'
</script>

<main class="flex flex-col flex-ai-c">
  <h1 class="title">We're Launching Soon</h1>

  <Timer />

  <div class="social-links flex flex-jc-c flex-ai-c">
    <a href="/"><img src="./icon-facebook.svg" alt="Facebook"></a>
    <a href="/"><img src="./icon-pinterest.svg" alt="Pinterest"></a>
    <a href="/"><img src="./icon-instagram.svg" alt="Instagram"></a>
  </div>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/TaraDesk">Perahim Tara</a>.
  </div>
</main>


<style lang="scss">
  main {
    position: relative;
    width: 20.625rem;
    height: 100vh;
    margin: 0 auto;
    padding-top: 5rem;
    gap: 3.5rem;

    @media (min-width: 47.25rem) {
      width: 43.125rem;
      padding-top: 3.5rem;
    }
  }

  .title {
    width: 100%;
    text-align: center;
    color: var(--title-color);
    font-size: 1.125rem;
    letter-spacing: 0.375rem;

    @media (min-width: 47.25rem) {
      font-size: 1.5rem;
      letter-spacing: 24%;
    }
  }

  .social-links {
    position: absolute;
    bottom: 2.5rem;
    gap: 2rem;

    a {
      transition: transform ease-in-out 300ms;

      &:hover {
        transform: translateY(-0.625rem);
      }
    }

    img {
      max-height: 1.125rem;
      max-width: 1.125rem;

      @media (min-width: 47.25rem) {
        max-height: 1.5rem;
        max-width: 1.5rem;
      }
    }
  }

  .attribution {
    position: absolute;
    bottom: 1rem;

    font-size: 0.5rem;
    text-transform: capitalize;
    color: var(--text-color);

    a {
      color: var(--primary-color); 
      text-transform: capitalize;
    }
  }
</style>

