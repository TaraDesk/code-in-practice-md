<script>
  import Feature from "./Feature.svelte"

  let featureList = [
    {
      featureImg: "./icon-online.svg",
      title: "Online Banking ",
      description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      featureImg: "./icon-budgeting.svg",
      title: "Simple Budgeting",
      description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      featureImg: "./icon-onboarding.svg",
      title: "Fast Onboarding",
      description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      featureImg: "./icon-api.svg",
      title: "Open API",
      description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    }
  ]
</script>

<section class="features">
  <div class="features__container container container__pall">
    <div class="features__intro">
      <h2>Why choose Easybank?</h2>   
      <p>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
      </p>  
    </div>

    <div class="features__grid">
      {#each featureList as feature (feature.title)}
        <Feature { ...feature } />
      {/each}
    </div>  
  </div>
</section>

<style lang="scss">
  .features {
    background-color: var(--lightGrayishBlue);
    text-align: center;

    @media (min-width: 40rem) {
      text-align: left;
    }

    &__intro {
      margin-bottom: 3.75rem;

      @media (min-width: 64rem) {
        width: 60%;
      }
    }

    &__grid {

      @media (min-width: 40rem) {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
</style>