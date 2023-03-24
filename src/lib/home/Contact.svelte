<section id="community">
    <svg class="bg-contact" viewBox="0 0 1440 1412" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="bg-contact" d="M0 0L1440 447V1412H0L0 0Z" fill="#141327"/>
    </svg>

    <img src="/images/home/bg-contact-line.svg" class="bg-contact-line" alt="Background contact line"/>

    <div class="container join">
        <div class="card">
            <img src="/images/home/left-contact.svg" class="left-contact hm" alt="Card left contact">
            <img src="/images/home/left-contact-mobile.svg" class="left-contact hd" alt="Card left contact">
            <img src="/images/home/right-contact.svg" class="right-contact hm" alt="Card right contact">
            <img src="/images/home/right-contact-mobile.svg" class="right-contact hd" alt="Card right contact">
            <img src="/images/home/contact-image.png" class="contact-image" alt="Contact image">
            <div class="info">
                <h3>Join the ædile community now!</h3>
                <div class="social-media">
                    <a class="btn-gradient secondary" data-text="Twitter" href="https://twitter.com/aedile_ic"
                       target="_blank" rel="noopener noreferrer">
                        <img alt="Try beta" class="icon" src="/images/twitter.svg"/>
                    </a>
                    <a class="btn-gradient secondary" data-text="GitHub" href="https://github.com/aedile-ic"
                       target="_blank" rel="noopener noreferrer">
                        <img alt="Try beta" class="icon" src="/images/github.svg"/>
                    </a>
                    <a class="btn-gradient secondary" data-text="Medium"
                       href="https://medium.com/@esensconsulting"
                       target="_blank" rel="noopener noreferrer">
                        <img alt="Try beta" class="icon" src="/images/medium.svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container contact">
        <h4>Contact us</h4>
        <p>Aedile is the fist open service offering individuals, teams and communities a decentralized alternative to their favorite management tools.</p>
        <p>Bring agility and a DAO twist to the way you manage your projects !</p>
        <a class="btn" href="mailto:aedile@esensconsulting.com" target="_blank" rel="noopener noreferrer">
            Contact
        </a>
    </div>
</section>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  .bg-contact {
    position: absolute;
    left: 0;
    right: 0;
    top: -160rem;
    width: 100%;
    z-index: -1;
  }

  .bg-contact-line {
    position: absolute;
    z-index: -1;
    right: 0;
    width: 677rem;
    top: -260rem;
  }

  .join {
    padding-top: 214rem;

    @media (max-width: $tabletMax) {
      padding-top: 100rem;

    }
  }

  .card {
    width: 1140rem;
    height: 400rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80.92rem;
    filter: drop-shadow(0px 91px 330px rgba(255, 138, 214, 0.07)) drop-shadow(0px 42.0721px 152.569px rgba(255, 138, 214, 0.0519173)) drop-shadow(0px 24.0727px 87.2965px rgba(255, 138, 214, 0.0438747)) drop-shadow(0px 14.6119px 52.9883px rgba(255, 138, 214, 0.0377964)) drop-shadow(0px 8.80434px 31.9278px rgba(255, 138, 214, 0.0322036)) drop-shadow(0px 4.90282px 17.7795px rgba(255, 138, 214, 0.0261253)) drop-shadow(0px 2.10867px 7.64683px rgba(255, 138, 214, 0.0180827));

    @media (max-width: $tabletMax) {
      width: 342rem;
      height: 359rem;
      padding-left: 25rem;
    }

    .info {
      position: relative;
      z-index: 2;
      max-width: 463rem;
    }

    h3 {
      background: $gradient1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      @media (max-width: $tabletMax) {
        width: 228rem;
      }
    }

    .social-media {
      margin-top: 48rem;
      display: flex;
      gap: 16rem;

      @media (max-width: $tabletMax) {
        flex-direction: column;
        margin-top: 24rem;
      }
    }

    .btn-gradient {
      width: fit-content;
      padding: 16.1rem;
      font-weight: 600;
      gap: 8rem;

      @media (max-width: $tabletMax) {
        padding: 13rem 16rem;
      }
    }

    .contact-image {
      position: absolute;
      z-index: 3;
      right: -80rem;
      bottom: 0;
      width: 702rem;

      @media (max-width: $tabletMax) {
        display: none;
      }
    }
  }

  .left-contact {
    position: absolute;
    left: 0;
    z-index: 1;
    top: 0;
    bottom: 0;
    width: 1016rem;

    @media (max-width: $tabletMax) {
      width: 316.98rem;
    }
  }

  .right-contact {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 582rem;

    @media (max-width: $tabletMax) {
      width: 316rem;
    }
  }

  .contact {
    margin-top: 188rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24rem;
    margin-bottom: 120rem;


    @media (max-width: $tabletMax) {
      margin-top: 142rem;
    }

    h4 {
      font-family: 'Chakra Petch', sans-serif;
      font-weight: 700;
      font-size: 48rem;
      line-height: 52rem;
      color: $neutral2;

      @media (max-width: $tabletMax) {
        font-size: 32rem;
        line-height: 36rem;
      }
    }

    p {
      width: 862rem;
      margin: 0 auto;
      color: $neutral3;

      @media (max-width: $tabletMax) {
        width: 342rem;
      }
    }

    .btn {
      padding: 12rem 16rem;
      margin-top: 24rem;

      @media (max-width: $tabletMax) {
        margin-top: 12rem;
      }
    }

  }

</style>

