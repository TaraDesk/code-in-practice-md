<script>
  import Header from './lib/Header.svelte'
  import Calculator from './lib/Calculator.svelte'
  import Attribution from './lib/Attribution.svelte'

</script>

<main>
  <Header />

  <Calculator />

  <Attribution />
</main>

<style lang="scss">
  main {
    width: 20.5rem;
    margin: 1.125rem auto;

    @media (min-width: 47.25rem) {
      width: 33.938rem;
      margin: 2.25rem auto;
    }
  }
</style>