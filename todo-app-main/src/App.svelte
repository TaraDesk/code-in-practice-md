<script>
  import Header from './lib/Header.svelte'
  import Todo from './lib/Todo.svelte'
  import Attribution from './lib/Attribution.svelte'

</script>

<main>
  <Header />

  <Todo />
  
  <div class="tips">
    <p>Drag and drop to reorder list</p>
  </div>

  <Attribution />
</main>

<style lang="scss">
    main {
        width: 20.563rem;
        margin: 2.625rem auto;

        @media (min-width: 47.25rem) {
          width: 33.875rem;
          margin: 5.25rem auto;
        }
    }

    .tips {
        color: var(--text-secondary-color);
        display: block;
        margin: 1.5rem 0;
        padding: 1.5rem;
        text-align: center;
        font-size: 0.75rem;

        @media (min-width: 47.25rem) {
          margin: 2rem 0 1.5rem 0;
          font-size: 0.875rem;
        }
    }
</style>
