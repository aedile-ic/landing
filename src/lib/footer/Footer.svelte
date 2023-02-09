<footer>
    <img src="/images/logo-text.svg" class="logo" alt="Logo">
    <p>AEDILE/ESENS (C) 2023</p>
    <div class="social-media">
        <a class="discord"
           href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/discord.svg"/>
        </a>
        <a class="twitter" href="https://twitter.com/aedile_ic"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/twitter.svg"/>
        </a>
        <a class="github" href="https://github.com/aedile-ic"
           target="_blank" rel="noopener noreferrer">
            <img alt="Try beta" class="icon" src="/images/github.svg"/>
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
  }

  .social-media {
    display: flex;
    gap: 16.80rem;
  }

  .twitter .icon {
    width: 16rem;
  }

  .discord .icon {
    width: 15rem;
  }

  .github .icon {
    width: 14.55rem;
  }
</style>