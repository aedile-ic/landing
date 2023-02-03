<nav id="nav">
    <div class="logo">
        <a href="#nav">
            <img src="/images/header/logo-header.svg" alt="Logo aedile" class="logo-header">
        </a>
    </div>
    <div class="ancors">
        <a href="#features">
            Features
        </a >
        <a href="#concept">
            Concept
        </a>
        <a href="#roadmap">
            Roadmap
        </a>
        <a href="#community">
            Community
        </a>
    </div>
    <div class="try">
        <div class="btn primary">
            Try the beta
            <img src="/images/header/try-beta-icon.svg" alt="Try beta" class="icon"/>
        </div>
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