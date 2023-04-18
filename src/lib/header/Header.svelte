<script>
    import {onMount} from "svelte";
    let displayMenu = false;

    onMount(() => {
        let prevScrollpos = document.documentElement.scrollTop || document.body.scrollTop;
        let navbar;

        navbar = document.getElementById("nav");

        addBgNav(prevScrollpos);

        function addBgNav(currentScrollPos) {
            if (currentScrollPos < 30) {
                navbar.style.background = '';
            } else {
                navbar.style.background = '#19172F';
            }
        }

        document.onscroll = () => {
            let currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            addBgNav(currentScrollPos);

            if (prevScrollpos - 50 > currentScrollPos) {
                navbar.style.transform = "translateY(0%)";
                prevScrollpos = currentScrollPos;
            }
            if (prevScrollpos + 50 < currentScrollPos) {
                navbar.style.transform = "translateY(-100%)";
                prevScrollpos = currentScrollPos;
            }
        };
    });

    function toggle() {
        displayMenu = !displayMenu;
    }
</script>

<nav id="nav">
    <div class="logo">
        <a href="#">
            <img width="84" height="20" loading="lazy" src="/images/logo-text.svg" alt="Logo aedile" class="logo-header">
        </a>
    </div>
    <div class="ancors ht hm">
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
        <a class="btn" href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" target="_blank"
           rel="noopener noreferrer">
            <span><span class="ht hm">Try the</span> beta</span>
            <img width="12" height="16" loading="lazy" alt="Try beta" class="icon" src="/images/arrow-try-beta-icon.svg"/>
        </a>

        <div class="burger hd" on:click={toggle}>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.333344H24V3.00001H0V0.333344ZM0 9.66668H24V12.3333H0V9.66668ZM0 19H24V21.6667H0V19Z"
                      fill="#92E7E8"/>
            </svg>
        </div>
    </div>
</nav>

<div class="menu-mobile"
     class:side-menu-back={displayMenu}
>
    <div class="close" on:click={toggle}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99998 7.11468L15.6 0.514679L17.4853 2.40001L10.8853 9.00001L17.4853 15.6L15.6 17.4853L8.99998 10.8853L2.39998 17.4853L0.514648 15.6L7.11465 9.00001L0.514648 2.40001L2.39998 0.514679L8.99998 7.11468Z" fill="#92E7E8"/>
        </svg>
    </div>
    <div class="ancors">
        <a class="link" href="#features" on:click={toggle}>
            Features
        </a>
        <a class="link" href="#concept" on:click={toggle}>
            Concept
        </a>
        <a class="link" href="#roadmap" on:click={toggle}>
            Roadmap
        </a>
        <a class="link" href="#community" on:click={toggle}>
            Community
        </a>
    </div>
</div>


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
    transition: transform 0.3s ease-in;

    @media (max-width: $tabletMax) {
      padding-left: 24rem;
      padding-right: 24rem;
    }

    > div {
      flex: 1;
    }
  }

  .logo-header {
    width: 84rem;
    height: auto;
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

  .burger {
    @media (max-width: $tabletMax) {
      display: flex;
      align-items: center;
      margin-left: 8rem;
    }
  }

  .menu-mobile {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $neutral5;
    z-index: 999;
    transition: transform 0.2s ease-in;
    transform: translateX(-100%);
    display: none;

    @media (max-width: $tabletMax) {
      display: flex;
    }

    &.side-menu-back {
      transform: translateX(0%);
    }

    .close {
      position: absolute;
      padding: 31rem;
      right: 0;
      z-index: 10;
    }

    .ancors {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;

      a {
        font-size: 32rem;
        line-height: 36rem;
      }
    }
  }

</style>