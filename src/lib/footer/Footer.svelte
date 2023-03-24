<footer>
    <img src="/images/logo-text.svg" class="logo" alt="Logo">
    <p>AEDILE/<a href="https://www.esensconsulting.com/" target="_blank">ESENS</a> (C) 2023</p>
    <div class="social-media">
        <a class="twitter" href="https://twitter.com/aedile_ic"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/twitter.svg"/>
        </a>
        <a class="github" href="https://github.com/aedile-ic"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/github.svg"/>
        </a>
        <a class="medium" href="https://medium.com/@esensconsulting"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/medium.svg"/>
        </a>
    </div>
</footer>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  footer {
    display: flex;
    flex-direction: column;
    padding: 38rem 0;
    gap: 24rem;
    align-items: center;
    justify-content: center;
    background-color: $neutral7;
  }

  .logo {
    width: 84rem;
  }

  p {
    color: $neutral3;

    a {
      color: $primary;
    }
  }

  .social-media {
    display: flex;
    gap: 16.80rem;
  }

</style>