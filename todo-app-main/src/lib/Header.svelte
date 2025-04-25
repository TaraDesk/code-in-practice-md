<script>
  let isThemeLight = $state(true);
  let imgToggle = $state("./icon-moon.svg");

  function toggleTheme() {
    isThemeLight = !isThemeLight;
    if (isThemeLight) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      imgToggle = "./icon-moon.svg";
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      imgToggle = "./icon-sun.svg";
    }
  }
</script>

<header class="header">
  <h1 class="header__title">Todo</h1>
  <button class="header__toggle button" onclick={toggleTheme}>
    <img src={imgToggle} class="header__toggle-img" alt="Toggle Icon" />
  </button>
</header>

<style lang="scss">
  @import '../styles';

  .header {
    @include flex($justify: space-between, $align: center);

    margin-bottom: 2rem;

    @media (min-width: 47.25rem) {
      margin-bottom: 2.5rem;
    }

    &__title {
      font-size: 1.875rem;
      line-height: 1;
      letter-spacing: 25%;
      color: white;
      text-transform: uppercase;

      @media (min-width: 47.25rem) {
        font-size: 2.5rem;
        letter-spacing: 38%;
      }
    }

    &__toggle {
      @include flex($justify: space-between, $align: center);

      img {
        width: 1.25rem;
        height: 1.25rem;

        @media (min-width: 47.25rem) {
          width: 1.625rem;
          height: 1.625rem;
        }
      }
    }
  }
</style>
