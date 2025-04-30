<footer class="footer">
  <div class="container">
    <a href="/" class="footer__logo">
      <img src="./logo-white.svg" alt="EasyBank">
    </a>

    <div class="footer__sosial">
      <a href="/">
        <img src="./icon-facebook.svg" alt="Facebook">
      </a>
      <a href="/">
        <img src="./icon-youtube.svg" alt="Youtube">
      </a>
      <a href="/">
        <img src="./icon-twitter.svg" alt="Twitter">
      </a>
      <a href="/">
        <img src="./icon-pinterest.svg" alt="Pinterest">
      </a>
      <a href="/">
        <img src="./icon-instagram.svg" alt="Instagram">
      </a>  
    </div>

    <div class="footer__links col1">
      <a href="/">About Us</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
    </div>
    <div class="footer__links col2">
      <a href="/">Careers</a>
      <a href="/">Support</a>
      <a href="/">Privacy Policy</a>
    </div>
    
    <div class="footer__cta">
      <a href="/" class="button">Request Invite</a>
    </div>
    <div class="footer__copyright">
        © Easybank. All Rights Reserved
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--darkBlue);
    color: var(--white);
    text-align: center;
    padding: 2.5rem;

    .container {
      @media (min-width: 64rem) {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 3fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: 
          "logo links1 links2 cta"
          "sosial links1 links2 copyright";
        justify-items: start;
        gap: 1rem;
      }
    }

    &__logo {
      display: inline-block;
      
      @media (max-width: 63.9375rem) {
        margin-bottom: 1.875rem;      
      }

      @media (min-width: 64rem) {
        grid-area: logo;    
      }
    }


    &__sosial {

      @media (max-width: 63.9375rem) {
          margin-bottom: 1.875rem;      
      }

      a {
        height: 1.25rem;
        display: inline-block;

        img {
          transition: transform 200ms ease-in-out;
        }

        &:hover img {
          transform: scale(1.2);
        }
      }

      a:not(:last-child) {
        margin-right: 1rem;
      }

      @media (min-width: 64rem) {
        grid-area: sosial;
        align-self: end;  
      }
    }


    &__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.9375rem;

      @media (min-width: 64rem) {
        align-items: flex-start;
        justify-content: space-between;
      }

      a {
        line-height: 2.25;
        transition: color 200ms ease-in-out;

        &:hover {
          color: var(--limeGreen);
        }
      }

      &.col1 {

        @media (min-width: 64rem) {
          grid-area: links1;    
        }
      }

      &.col2 {

        @media (max-width: 63.9375rem) {
          margin-bottom: 1.875rem;      
        }

        @media (min-width: 64rem) {
          grid-area: links2;    
        }
      }
    }


    &__cta {
      @media (min-width: 64rem) {
        grid-area: cta;
        justify-self: end;
        text-align: right;
      }

      a.button {
        @media (max-width: 63.9375rem) {
          margin-bottom: 1.875rem;      
        }
      } 
    }


    &__copyright {
      font-size: 0.8125rem;
      color: var(--grayishBlue);

      @media (min-width: 64rem) {
        grid-area: copyright;
        justify-self: end;
        align-self: end;
      }
    }
  }

  a {
    color: var(--white);
  }
</style>