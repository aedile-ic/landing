<script>
    import LogoToRight from '../anim/LogoToRight.svelte';
</script>

<section>
    <img width="1440" height="1611" loading="lazy" alt="Background build and fund" class="bg-build-and-fund" src="/images/home/bg-build-and-fund.svg"/>

    <div class="container">
        <div class="bloc-build-and-fund">
            <h1>Build and fund, 100% on chain</h1>
            <p>aedile is the first open and decentralized service offering individuals, teams, and communities, an alternative to their favorite management tools.</p>
            <div class="social-media">
                <a class="btn try ht hm" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" target="_blank" rel="noopener noreferrer">
                    Try the beta
                    <img width="12" height="16" loading="lazy" alt="Try beta" class="icon" src="/images/arrow-try-beta-icon.svg"/>
                </a>
                <a class="btn-gradient secondary" href="https://twitter.com/aedile_ic" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" loading="lazy" alt="Try beta" class="icon" src="/images/twitter.svg"/>
                </a>
                <a class="btn-gradient secondary" href="https://github.com/aedile-ic" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" loading="lazy" alt="Try beta" class="icon" src="/images/github.svg"/>
                </a>
                <a class="btn-gradient secondary" href="https://medium.com/@esensconsulting" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" loading="lazy" alt="Try beta" class="icon" src="/images/medium.svg"/>
                </a>
            </div>
            <a class="btn try hdf" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" target="_blank" rel="noopener noreferrer">
                Try the beta
                <img width="12" height="16" loading="lazy" alt="Try beta" class="icon" src="/images/arrow-try-beta-icon.svg"/>
            </a>
        </div>
    </div>

    <div class="logo-to-right">
        <LogoToRight/>
    </div>
</section>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  .bg-build-and-fund {
    position: absolute;
    right: 0;
    top: 0;
    width: 1440rem;

    @media (max-width: $tabletMax) {
      width: 797.42rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 781rem;

    @media (max-width: $tabletMax) {
      padding-top: 150rem;
      height: fit-content;
      padding-bottom: 120rem;
    }
  }

  .bloc-build-and-fund {
    color: $neutral2;
    max-width: 460rem;
    display: flex;
    flex-direction: column;
    gap: 16rem;
  }

  .social-media {
    margin-top: 16rem;
    display: flex;
    gap: 16rem;

    @media (max-width: $tabletMax) {
      margin-top: 0;
      margin-bottom: 16rem;

      .btn-gradient {
        width: 48rem;
        height: 48rem;
      }
    }
  }

  .other {
    background: linear-gradient(90deg, #F296D2 0%, #FFB483 100%);
    border: 1px solid #28254D;
    border-radius: 10px;
    color: #28254D;
    font-size: 20rem;
    padding: 10rem 20rem;
  }

  .try .icon {
    width: 11.51rem;
  }

  .twitter img {
    width: 20.06rem;
  }

  .github img {
    width: 17.46rem;
  }

  .btn.try {
    @media (max-width: $tabletMax) {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .logo-to-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 100%;
    z-index: -1;

    @media (max-width: $tabletMax) {
      display: none;
    }
  }
</style>