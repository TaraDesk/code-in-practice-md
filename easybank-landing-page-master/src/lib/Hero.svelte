<section class="hero">
  <div class="container">
    <div class="hero__images"></div>
    <div class="hero__text container__pall">
      <h1>Next generation digital banking</h1>
      <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <a href="/" class="button hero__cta">Request Invite</a>
    </div>  
  </div>
</section>

<style lang="scss">
  .hero { 
    background-color: var(--veryLightGray);

    .container {
      @media (min-width: 64rem) {
        display: flex;
        align-items: center;
      } 
    }

    &__images {
      position: relative;
      background-image: url("/bg-intro-mobile.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      min-height: 17.5rem;

      @media (max-width: 63.9375rem) {
        min-height: 25rem;
        background-position: center 60%;
      }

      @media (min-width: 64rem) {
        flex: 3;
        order: 2;
        height: 41rem;
        background-image: none;
        // background-image: url("/bg-intro-desktop.svg");
        // background-position: left center;
      }

      &::before {

        @media (min-width: 64rem) {
          content: "";
          height: 100%;

          position: absolute;
          background-image: url("/bg-intro-desktop.svg");
          //background-size: 93%;
          background-repeat: no-repeat;
          width: 150%;
          background-size: 122%;
          background-position: 0% 83%;

        }
      }

      &::after {

        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        background-image: url("/image-mockups.png");
        background-size: 130%;
        background-repeat: no-repeat;
        background-position: center bottom;

        @media (min-width: 40rem) {
          background-size: 70%;
        }

        @media (min-width: 64rem) {
          width: 120%;
          height: 122%;
          background-size: 94%;
          background-position: center 150%;
          left: 22%;
        }
      }
    }

    &__text {
      text-align: center;

      @media (min-width: 64rem) {
        flex: 2;
        order: 1;
        text-align: left;
      } 
    } 
  }
</style>
