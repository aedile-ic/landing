<script>
    import {onMount} from 'svelte';

    let datas = [];
    let startX;
    let currentX;
    let touchStartX;
    let touchCurrentX;
    let currentPageElt = 0;
    let currentPage = 0;

    async function fetchData() {
        const response = await fetch('carrousel.json');
        datas = await response.json();
    }

    onMount(async () => {
        await fetchData();
        let section = document.getElementById("carrousel");

        section.addEventListener("mousedown", (event) => startX = event.pageX);

        section.addEventListener("mouseup", (event) => {
            currentX = event.pageX;
            handleNavigation();
        });

        section.addEventListener("touchstart", (event) => touchStartX = event.touches[0].clientX);

        section.addEventListener("touchend", function (event) {
            touchCurrentX = event.changedTouches[0].clientX;
            handleNavigation();
        });
    });

    function handleNavigation() {
        if (startX || touchStartX) {
            if (((currentX - 200) > startX || (touchCurrentX - 100) > touchStartX) && currentPage > 0) {
                handleClick(currentPage - 1)
            }

            if (((currentX + 200) < startX || (touchCurrentX + 100) < touchStartX) && currentPage < datas.length - 1) {
                handleClick(currentPage + 1)
            }

            startX = null;
            currentX = null;
            touchStartX = null;
            touchCurrentX = null;
        }
    }

    function handleClick(page) {
        if (page === currentPage) {
            return;
        }

        currentPageElt = null;
        setTimeout(() => {
            currentPage = page;
            let size = 804 + 80;
            if (window.outerWidth < 992) {
                size = 340 + 80;
            }
            document.getElementById('elts').style.transform = 'translateX(-' + page * (size) + 'rem)'
            setTimeout(() => {
                currentPageElt = page;
            }, 300)
        }, 200)

    }
</script>

<div class="bloc-carrousel" id="carrousel">
    <div class="carrousel">
        <div class="elts" id="elts">
            {#each datas as data, i}
                <div class="elt {i === currentPageElt ? 'current-elt' : ''}" on:click={() => handleClick(i)}>
                    <img src="{data.src}" alt="{data.alt}"/>
                </div>
            {/each}
        </div>

        <div class="pagination">
            {#each datas as _, i}
            <span class="pagination-item {currentPage === i ? 'current-page' : ''}"
                  on:click={() => handleClick(i)}></span>
            {/each}
        </div>

        <div class="info">
            {#each datas as data, i}
                <div class="anim-info {currentPageElt !== i ? 'hidden' : 'show'}">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  .bloc-carrousel {
    overflow: hidden;
    width: 100%;
    padding-bottom: 220rem;

    @media (max-width: $tabletMax) {
      padding-bottom: 120rem;
    }
  }

  .carrousel {
    margin: 0 auto;
    width: 804rem;

    @media (max-width: $tabletMax) {
      width: 340rem;
    }
  }

  .elts {
    display: flex;
    gap: 80rem;
    transition: all 0.2s ease-in;
  }

  @property --myColor1 {
    syntax: '<color>';
    initial-value: transparent;
    inherits: false;
  }

  @property --myColor2 {
    syntax: '<color>';
    initial-value: transparent;
    inherits: false;
  }

  .elt {
    position: relative;
    user-select: none;

    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
    }


    img {
      width: 804rem;
      padding: 4rem;
      border-radius: 20px;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      background-color: transparent;
      background-image: linear-gradient(90deg, var(--myColor1) 0%, var(--myColor2) 100%);
      transition: --myColor1 0.2s ease-in, --myColor2 0.2s ease-in, all 0.2s ease-in;

      @media (max-width: $tabletMax) {
        width: 340rem;
      }
    }

    &.current-elt img {
      --myColor1: #F296D2;
      --myColor2: #FFB483;
      box-shadow: 0 91px 330px 0 #FF8AD612;
    }
  }

  .pagination {
    display: flex;
    gap: 8rem;
    width: fit-content;
    margin: 80rem auto 0;
    cursor: pointer;

    @media (max-width: $tabletMax) {
      margin-top: 32rem;
    }
  }

  .pagination-item {
    width: 40rem;
    height: 8rem;
    background: $neutral2;
    border-radius: 100px;

    &.current-page {
      background: $primary;
    }
  }

  .info {
    position: relative;
  }

  .anim-info {
    transition: all 0.2s ease-in;
    position: absolute;
    margin-top: 16rem;
    text-align: center;
    width: 100%;

    h3 {
      font-family: 'Chakra Petch';
      font-style: normal;
      font-weight: 700;
      font-size: 32rem;
      line-height: 36rem;
      color: $primary;
    }

    p {
      margin-top: 16rem;
      font-size: 16rem;
      line-height: 18rem;
      color: $neutral3;
    }
  }

</style>

