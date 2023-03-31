<script>
    import Carrousel from '../anim/Carrousel.svelte';
</script>

<section id="features">
    <img src="/images/home/bg-work-together.svg" class="bg-work-together  hm" alt="background work together">
    <img src="/images/home/bg-work-together-mobile.svg" class="bg-work-together ht hd" alt="background work together">

    <div class="container">
        <h2>Work together, in one shared space</h2>
    </div>

    <Carrousel/>
</section>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  .bg-work-together {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 192rem;
    z-index: -1;
  }

  .container {
    margin: 0 auto;
    text-align: center;

    @media (max-width: $tabletMax) {
      text-align: left;
    }
  }

  h2 {
    color: $white;
    margin-bottom: 80rem;

    @media (max-width: $tabletMax) {
      margin-bottom: 32rem;
    }
  }
</style>

