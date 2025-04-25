<script>
	let props = $props();
</script>

<button class={"button " + props.className } onclick={props.click}>
	<slot />
</button>

<style lang="scss">
	.menu-button {
	    color: var(--text-secondary-color);
	    font-size: 0.75rem;
	    transition: all ease-in-out 300ms;
	    padding: 0;

	    &:hover {
	      color: var(--text-color);
	    }

	    @media (min-width: 47.25rem) {
	    	font-size: 1rem;
      }

      &.active {
	    	color: var(--bright-blue);
	    }
	}

	.mobile-menu-button {
	    color: var(--text-secondary-color);
	    letter-spacing: 0.063rem;
	    font-weight: 700;
	    font-size: 0.75rem;
	    transition: all ease-in-out 300ms;

	    &:hover {
	    	color: var(--text-color);
	    }

	    &.active {
	    	color: var(--bright-blue);
	    }
	}

	.button-icon {
		display: flex;
		justify-content: center;
		align-items: center;
        margin-left: auto;
        max-width: 0.75rem;
        max-height: 0.75rem;

        @media (min-width: 47.25rem) {
          display: none;
        }
  	}
</style>