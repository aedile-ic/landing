<nav id="nav">
    <div class="logo">
        <a href="#">
            <img src="/images/header/logo-header.svg" alt="Logo aedile" class="logo-header">
        </a>
    </div>
    <div class="ancors">
        <a class="link" href="#features">
            Features
        </a>
        <a class="link" href="#concept">
            Concept
        </a>
        <a class="link" href="#roadmap">
            Roadmap
        </a>
        <a class="link" href="#community">
            Community
        </a>
    </div>
    <div class="try">
        <a class="btn" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" target="_blank">
            Try the beta
            <img alt="Try beta" class="icon" src="/images/arrow-try-beta-icon.svg"/>
        </a>
    </div>
</nav>


<style lang="scss">
  @import '../../routes/assets/scss/global.scss';

  nav {
    display: flex;
    align-items: center;
    height: 88rem;
    padding-left: 50rem;
    padding-right: 50rem;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;

    > div {
      flex: 1;
    }
  }

  .logo-header {
    width: 84rem;
  }

  .ancors {
    display: flex;
    gap: 15rem;

    a {
      padding: 12rem 15rem;
      color: $primary;
      font-size: 16rem;
      font-family: 'Chakra Petch', sans-serif;
      font-weight: 600;
    }
  }

  .try {
    display: flex;
    justify-content: end;
  }

</style>