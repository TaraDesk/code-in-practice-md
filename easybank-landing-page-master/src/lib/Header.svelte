<script>
  let mobileMenu = $state(false);

  function toggleMobileMenu(e) {
    e.preventDefault();
    
    mobileMenu = !mobileMenu;

    if(mobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
</script>

<header class="header">
  <div class="overlay hide-for-desktop {mobileMenu ? '' : 'hide'}"></div>
  <nav class="container container__pall flex flex-jc-sb flex-ai-c">
    <a href="/" class="header__logo">
      <img src="./logo.svg" alt="EasyBank">
    </a>

    <a onclick={toggleMobileMenu} id="btnHamburger" class="header__toggle hide-for-desktop" tabindex="0" role="button" aria-pressed="false">
      <img src="./icon-hamburger.svg" alt="Mobile Menu" class="{mobileMenu ? 'hide' : ''}">
      <img src="./icon-close.svg" alt="Close Mobile Menu" class="{mobileMenu ? '' : 'hide'}">
    </a>

    <div class="header__links hide-for-mobile">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
      <a href="/">Careers</a>
    </div>

    <a href="/" class="header__cta button hide-for-mobile">Request Invite</a>
  </nav>

  <div class="header__menu hide-for-desktop {mobileMenu ? '' : 'hide'}">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
      <a href="/">Careers</a>
  </div>
</header>

<style lang="scss">
  .header {
    z-index: 10;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: var(--white);
    box-shadow: 2px 2px 9px 3px rgba(0, 0, 0, .2);

    &__logo {
      cursor: pointer;

      img {
        width: 8.8125rem;
        height: 1.375rem;
      }
    }

    &__toggle {
      cursor: pointer;

      img {
        max-width: 1.625rem;
      }
    }

    &__links {
      a {
        position: relative;
        font-size: var(--font-sm);
        color: var(--grayishBlue);
        transition: color 300ms ease-in-out;

        &:not(:last-child) {
          margin-right: 2rem;
        }

        &::before {
          content: "";
          background: linear-gradient(to right, var(--limeGreen), var(--brightCyan));
          height: 0.3125rem;
          position: absolute;
          opacity: 0;
          left: 0;
          right: 0;
          bottom: -30px;
          transition: opacity 300ms ease-in-out;
        }

        &:hover {
          color: var(--darkBlue);

          &::before {
            opacity: 1;
          }
        }
      }
    }

    &__menu {
      position: absolute;
      z-index: 15;
      width: calc(100% - 3rem);
      left: 50%;
      transform: translateX(-50%);
      margin-top: 1.5rem;
      background: var(--white);
      border-radius: 5px;
      padding: 1.625rem;

      a {
        text-align: center;
        display: block;
        color: var(--darkBlue);
        padding: 0.625rem;
        transition: color 300ms ease-in-out;

        &:hover {
          color: var(--limeGreen);
        }
      }
    }
  }

  .overlay {
    position: fixed;
    z-index: 10;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(var(--darkBlue), transparent);
  }

  nav {
    position: relative;
    z-index: 3;
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
  }
</style>