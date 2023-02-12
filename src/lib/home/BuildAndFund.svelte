<script>
    import LogoToRight from '../anim/LogoToRight.svelte';
</script>

<section>
    <img alt="Background build and fund" class="bg-build-and-fund" src="/images/home/bg-build-and-fund.svg"/>

    <div class="container">
        <div class="bloc-build-and-fund">
            <h1>Build and fund anything on chain</h1>
            <p>Aedile is an open and decentralized service offering an alternative to your favorite management tools for
                individuals, teams and communities. </p>
            <div class="social-media">
                <a class="btn try" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" target="_blank" rel="noopener noreferrer">
                    Try the beta
                    <img alt="Try beta" class="icon" src="/images/arrow-try-beta-icon.svg"/>
                </a>
<!--                <a class="btn-gradient secondary discord" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login"-->
<!--                   target="_blank" rel="noopener noreferrer">-->
<!--                    <img alt="Try beta" class="icon" src="/images/discord.svg"/>-->
<!--                </a>-->
                <a class="btn-gradient secondary twitter" href="https://twitter.com/aedile_ic" target="_blank" rel="noopener noreferrer">
                    <img alt="Try beta" class="icon" src="/images/twitter.svg"/>
                </a>
                <a class="btn-gradient secondary github" href="https://github.com/aedile-ic" target="_blank" rel="noopener noreferrer">
                    <img alt="Try beta" class="icon" src="/images/github.svg"/>
                </a>
            </div>
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
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 781rem;
  }

  .bloc-build-and-fund {
    color: $neutral2;
    max-width: 472rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .social-media {
    margin-top: 16rem;
    display: flex;
    gap: 16rem;
  }

  .other {
    background: linear-gradient(90deg, #F296D2 0%, #FFB483 100%);
    border: 1px solid #28254D;
    border-radius: 10px;
    color: #28254D;
    font-size: 20px;
    padding: 10px 20px;
  }

  .try .icon {
    width: 11.51rem;
  }

  //.discord img {
  //  width: 18rem;
  //}

  .twitter img {
    width: 20.06rem;
  }

  .github img {
    width: 17.46rem;
  }

  .logo-to-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 100%;
    z-index: -1;
  }
</style>